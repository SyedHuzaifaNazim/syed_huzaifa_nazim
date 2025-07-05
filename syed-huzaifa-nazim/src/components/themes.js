// src/themes.js
export const lightTheme = {
  // Base colors
  body: '#ffffff',
  text: '#1a1a1a',
  textSecondary: '#4b5563',
  textMuted: '#6b7280',
  
  // Primary colors
  primary: '#2563eb',  // More vibrant blue
  primaryLight: '#3b82f6',
  primaryDark: '#1d4ed8',
  
  // Secondary colors
  secondary: '#f3f4f6',
  secondaryLight: '#f9fafb',
  secondaryDark: '#e5e7eb',
  
  // UI elements
  card: '#ffffff',
  cardBorder: '#e5e7eb',
  header: '#ffffff',
  headerBorder: '#e5e7eb',
  
  // Accents
  accent: '#10b981',  // Emerald green
  error: '#ef4444',   // Red for errors
  
  // Shadows
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  
  // Interactive states
  hover: 'rgba(0, 0, 0, 0.05)',
  active: 'rgba(0, 0, 0, 0.1)',
  
  // Gradients
  gradientPrimary: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
}

export const darkTheme = {
  // Base colors
  body: '#111827',
  text: '#f9fafb',
  textSecondary: '#d1d5db',
  textMuted: '#9ca3af',
  
  // Primary colors
  primary: '#f59e0b',  // Amber instead of blue for better contrast
  primaryLight: '#fbbf24',
  primaryDark: '#d97706',
  
  // Secondary colors
  secondary: '#1f2937',
  secondaryLight: '#111827',
  secondaryDark: '#374151',
  
  // UI elements
  card: '#1f2937',
  cardBorder: '#374151',
  header: '#111827',
  headerBorder: '#374151',
  
  // Accents
  accent: '#10b981',  // Same emerald green
  error: '#ef4444',   // Same red for consistency
  
  // Shadows
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
  
  // Interactive states
  hover: 'rgba(255, 255, 255, 0.05)',
  active: 'rgba(255, 255, 255, 0.1)',
  
  // Gradients
  gradientPrimary: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
}

// Additional theme variants could be added here
// export const highContrastTheme = { ... }
// export const pastelTheme = { ... }