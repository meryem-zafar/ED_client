const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || ''
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || ''

export const isCloudinaryConfigured = Boolean(cloudName && uploadPreset)

/**
 * Upload an image file to Cloudinary with instant FileReader fallback
 */
export async function uploadImageToCloudinary(file) {
  if (!file) return null

  // If Cloudinary environment variables are set, attempt direct Cloudinary upload
  if (isCloudinaryConfigured) {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', uploadPreset)

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const data = await response.json()
        return {
          url: data.secure_url,
          public_id: data.public_id,
          provider: 'cloudinary'
        }
      }
    } catch (error) {
      console.warn('Cloudinary upload error, using local object preview:', error)
    }
  }

  // Fallback: Generate local URL or Base64 for demonstration
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      resolve({
        url: reader.result,
        public_id: `local_${Date.now()}`,
        provider: 'local_preview'
      })
    }
    reader.readAsDataURL(file)
  })
}
