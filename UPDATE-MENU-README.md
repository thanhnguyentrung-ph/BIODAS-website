# Menu Translation Script

## Overview

This script automatically updates Vietnamese menu text to English in all HTML files within the `docs/en` folder.

## What it does

The script:

1. Recursively finds all `.html` files in `docs/en` and its subdirectories
2. Replaces Vietnamese menu text with English translations
3. Updates menu item IDs and `aria-labelledby` attributes
4. Only modifies files that contain Vietnamese text

## Translations Applied

| Vietnamese                           | English                        |
| ------------------------------------ | ------------------------------ |
| Giới thiệu                           | About                          |
| Giới thiệu BIODAS                    | About BIODAS                   |
| Sứ mệnh - Tầm nhìn - Giá trị cốt lõi | Mission - Vision - Core Values |
| Nhân sự                              | Team                           |
| Hoạt động chuyên môn                 | Professional Activities        |
| Tài nguyên                           | Resources                      |
| Tin tức                              | News                           |
| Sự kiện                              | Events                         |
| Thông tin học bổng                   | Scholarship Information        |
| Tuyển dụng                           | Recruitment                    |

## Usage

### Prerequisites

- Node.js installed on your system

### Running the Script

1. Open a terminal in the project root directory (`BIODAS-website`)

2. Run the script:

   ```bash
   node update-menu-translations.js
   ```

3. The script will:
   - Find all HTML files in `docs/en`
   - Process each file
   - Display progress and results

### Example Output

```
Finding HTML files in d:\04 EXPERIMENTS\BIODAS-website\docs\en...
Found 25 HTML files.

Processing: docs\en\media\event.html
  ✓ Updated
Processing: docs\en\about\introduce.html
  ✓ Updated
Processing: docs\en\index.html
  - No changes needed

=================================
Total files processed: 25
Files updated: 20
=================================
```

## Adding New Translations

To add more translations, edit the `translations` object in `update-menu-translations.js`:

```javascript
const translations = {
  "Vietnamese Text": "English Text",
  // Add more translations here
};
```

## Safety

- The script only modifies HTML files in `docs/en`
- Files are only written if changes are detected
- Original file content is preserved if no Vietnamese text is found

## Troubleshooting

**Error: Directory does not exist**

- Ensure you're running the script from the project root directory
- Check that the `docs/en` folder exists

**No files updated**

- The HTML files may already be in English
- Check the translation mapping matches your HTML structure

## Integration with Build Process

You can integrate this script into your build process by adding it to `package.json`:

```json
{
  "scripts": {
    "translate-menus": "node update-menu-translations.js"
  }
}
```

Then run: `npm run translate-menus`
