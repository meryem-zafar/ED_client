import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Storage key constants for local fallback
 */
const STORAGE_KEYS = {
  APPLICATIONS: 'edwise_applications',
  INQUIRIES: 'edwise_inquiries',
  UNIVERSITIES: 'edwise_universities_custom',
  SETTINGS: 'edwise_settings'
}

/**
 * Helper to submit a student application (Supabase with LocalStorage fallback)
 */
export async function submitApplication(applicationData) {
  const newApp = {
    id: `app_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    ...applicationData,
    status: 'Pending',
    created_at: new Date().toISOString()
  }

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('applications')
        .insert([newApp])
        .select()
      
      if (!error && data) {
        return { success: true, data: data[0], mode: 'supabase' }
      }
    } catch (err) {
      console.warn('Supabase insert failed, falling back to LocalStorage:', err)
    }
  }

  // LocalStorage Fallback
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]')
  const updated = [newApp, ...existing]
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated))
  return { success: true, data: newApp, mode: 'local' }
}

/**
 * Helper to fetch applications (Admin view)
 */
export async function fetchApplications() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (!error && data) {
        return data
      }
    } catch (err) {
      console.warn('Supabase fetch failed, falling back to LocalStorage:', err)
    }
  }

  return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]')
}

/**
 * Helper to update application status (Admin view)
 */
export async function updateApplicationStatus(appId, newStatus) {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', appId)
        .select()
      
      if (!error && data) return true
    } catch (err) {
      console.warn('Supabase update failed:', err)
    }
  }

  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]')
  const updated = existing.map(app => app.id === appId ? { ...app, status: newStatus } : app)
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated))
  return true
}

/**
 * Helper to submit an inquiry / contact form
 */
export async function submitInquiry(inquiryData) {
  const newInquiry = {
    id: `inq_${Date.now()}`,
    ...inquiryData,
    created_at: new Date().toISOString()
  }

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .insert([newInquiry])
        .select()
      if (!error && data) return { success: true, mode: 'supabase' }
    } catch (err) {
      console.warn('Supabase inquiry failed:', err)
    }
  }

  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]')
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify([newInquiry, ...existing]))
  return { success: true, mode: 'local' }
}
