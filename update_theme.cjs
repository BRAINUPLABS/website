const fs = require('fs');
const path = require('path');

const colors = {
  '#FF822E': 'brand-orange',
  '#ffaa6b': 'brand-orange-light',
  '#d96318': 'brand-orange-dark',
  '#0c709a': 'brand-blue',
  '#7dd4f7': 'brand-blue-light',
  '#1899cc': 'brand-blue-dark',
  '#F7A824': 'brand-yellow',
  '#fcc55a': 'brand-yellow-light',
  '#c9840d': 'brand-yellow-dark',
  '#EEF2F7': 'brand-bg-soft',
  '#0D1117': 'brand-bg-dark',
  '#161B27': 'brand-bg-dark2',
  '#5C6B82': 'brand-text-light',
  '#8A97A8': 'brand-text-muted',
  '#E2E8F0': 'brand-border'
};

const prefixes = ['bg', 'text', 'border', 'from', 'to', 'via', 'ring', 'divide'];

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // For each color replacement
  for (const [hex, themeName] of Object.entries(colors)) {
    // Both upper and lower case hex
    const lowerHex = hex.toLowerCase();
    const upperHex = hex.toUpperCase();
    
    // Replace arbitrary color classes e.g. bg-[#FF822E] -> bg-brand-orange
    for (const prefix of prefixes) {
      const regexUpper = new RegExp(`\\b${prefix}-\\[${upperHex}\\]`, 'g');
      const regexLower = new RegExp(`\\b${prefix}-\\[${lowerHex}\\]`, 'g');
      content = content.replace(regexUpper, `${prefix}-${themeName}`);
      content = content.replace(regexLower, `${prefix}-${themeName}`);
      
      // Also account for opacity, e.g., bg-[#0D1117]/70 -> bg-brand-bg-dark/70
      const regexUpperOpac = new RegExp(`\\b${prefix}-\\[${upperHex}\\](\\/\\d+)`, 'g');
      const regexLowerOpac = new RegExp(`\\b${prefix}-\\[${lowerHex}\\](\\/\\d+)`, 'g');
      content = content.replace(regexUpperOpac, `${prefix}-${themeName}$1`);
      content = content.replace(regexLowerOpac, `${prefix}-${themeName}$1`);
    }
  }

  // Handle var() usages, e.g. bg-[var(--orange)] -> bg-brand-orange
  // It's possible they did text-[var(--orange)] or text-[var(--bg-dark)]
  const varMapping = {
    'var(--orange)': 'brand-orange',
    'var(--orange-light)': 'brand-orange-light',
    'var(--orange-dark)': 'brand-orange-dark',
    'var(--blue)': 'brand-blue',
    'var(--blue-light)': 'brand-blue-light',
    'var(--blue-dark)': 'brand-blue-dark',
    'var(--yellow)': 'brand-yellow',
    'var(--yellow-light)': 'brand-yellow-light',
    'var(--yellow-dark)': 'brand-yellow-dark',
    'var(--bg-soft)': 'brand-bg-soft',
    'var(--bg-dark)': 'brand-bg-dark',
    'var(--bg-dark2)': 'brand-bg-dark2',
    'var(--text-light)': 'brand-text-light',
    'var(--text-muted)': 'brand-text-muted',
    'var(--border)': 'brand-border'
  };

  for (const [v, themeName] of Object.entries(varMapping)) {
    for (const prefix of prefixes) {
      // Escape the variable string for regex
      const escapedVar = v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Look for format: prefix-[var(--orange)]
      const regexVar = new RegExp(`\\b${prefix}-\\[${escapedVar}\\]`, 'g');
      content = content.replace(regexVar, `${prefix}-${themeName}`);
      
      // With opacity: prefix-[var(--orange)]/50
      const regexVarOpac = new RegExp(`\\b${prefix}-\\[${escapedVar}\\](\\/\\d+)`, 'g');
      content = content.replace(regexVarOpac, `${prefix}-${themeName}$1`);
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      updateFile(fullPath);
    }
  }
}

processDirectory('./src');
