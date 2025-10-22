const fs = require("fs");
const path = require("path");

// Translation mapping from Vietnamese to English
const translations = {
  // Main menu items
  "Giới thiệu": "About",
  "Giới thiệu BIODAS": "About BIODAS",
  "Sứ mệnh - Tầm nhìn - Giá trị cốt lõi": "Mission - Vision - Core Values",
  "Nhân sự": "Team",
  "Hoạt động chuyên môn": "Professional Activities",
  "Tài nguyên": "Resources",
  "Tin tức": "News",
  "Sự kiện": "Events",
  "Thông tin học bổng": "Scholarship Information",
  "Tuyển dụng": "Recruitment",

  // Menu IDs
  "nav-menu-giới-thiệu": "nav-menu-about",
  "nav-menu-tin-tức": "nav-menu-news",
};

/**
 * Replace Vietnamese text with English in HTML content
 * @param {string} content - HTML content
 * @returns {string} - Updated HTML content
 */
function translateContent(content) {
  let updatedContent = content;

  // Replace each Vietnamese text with English
  for (const [vietnamese, english] of Object.entries(translations)) {
    // Create regex to match the text within menu-text or dropdown-text spans
    const regex = new RegExp(
      `(<span class="(?:menu-text|dropdown-text)">)${escapeRegex(
        vietnamese
      )}(<\\/span>)`,
      "g"
    );
    updatedContent = updatedContent.replace(regex, `$1${english}$2`);

    // Also replace in id and aria-labelledby attributes
    const idRegex = new RegExp(
      `(id="|aria-labelledby=")${escapeRegex(vietnamese)}(")`,
      "g"
    );
    updatedContent = updatedContent.replace(idRegex, `$1${english}$2`);
  }

  return updatedContent;
}

/**
 * Escape special regex characters
 * @param {string} string - String to escape
 * @returns {string} - Escaped string
 */
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Recursively find all HTML files in a directory
 * @param {string} dir - Directory path
 * @param {Array} fileList - Accumulator for file paths
 * @returns {Array} - List of HTML file paths
 */
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === ".html") {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Process all HTML files in the docs/en directory
 */
function processHtmlFiles() {
  const docsEnDir = path.join(__dirname, "docs", "en");

  if (!fs.existsSync(docsEnDir)) {
    console.error(`Error: Directory ${docsEnDir} does not exist!`);
    process.exit(1);
  }

  console.log(`Finding HTML files in ${docsEnDir}...`);
  const htmlFiles = findHtmlFiles(docsEnDir);
  console.log(`Found ${htmlFiles.length} HTML files.\n`);

  let updatedCount = 0;

  htmlFiles.forEach((filePath) => {
    console.log(`Processing: ${path.relative(__dirname, filePath)}`);

    try {
      // Read file content
      const content = fs.readFileSync(filePath, "utf8");

      // Translate content
      const updatedContent = translateContent(content);

      // Only write if content changed
      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, "utf8");
        console.log(`  ✓ Updated`);
        updatedCount++;
      } else {
        console.log(`  - No changes needed`);
      }
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }
  });

  console.log(`\n=================================`);
  console.log(`Total files processed: ${htmlFiles.length}`);
  console.log(`Files updated: ${updatedCount}`);
  console.log(`=================================`);
}

// Run the script
if (require.main === module) {
  processHtmlFiles();
}

module.exports = { translateContent, findHtmlFiles };
