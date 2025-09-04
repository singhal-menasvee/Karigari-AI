// Application Data
const applicationData = {
  artisan_categories: [
    "Textiles & Handloom",
    "Pottery & Ceramics", 
    "Jewelry & Metalwork",
    "Wood Carving",
    "Leather Goods",
    "Paper Crafts",
    "Stone Carving",
    "Bamboo & Cane"
  ],
  photography_tips: {
    textiles: [
      { icon: "☀️", tip: "Use natural lighting near windows" },
      { icon: "🔍", tip: "Show texture details with close-up shots" },
      { icon: "👤", tip: "Display items being worn or used" },
      { icon: "📏", tip: "Include scale references like hands" }
    ],
    pottery: [
      { icon: "💡", tip: "Highlight craftsmanship with side lighting" },
      { icon: "🏠", tip: "Show the pottery in use with styled scenes" },
      { icon: "🎬", tip: "Capture the making process" },
      { icon: "🎨", tip: "Use neutral backgrounds to make colors pop" }
    ],
    jewelry: [
      { icon: "✨", tip: "Use soft, diffused lighting to avoid harsh reflections" },
      { icon: "🖤", tip: "Contrast with dark backgrounds for metals" },
      { icon: "🔍", tip: "Show intricate details with macro photography" },
      { icon: "👑", tip: "Display jewelry being worn on models" }
    ],
    wood: [
      { icon: "🌳", tip: "Show natural wood grain textures" },
      { icon: "🔨", tip: "Capture the crafting process and tools" },
      { icon: "📐", tip: "Highlight precision and clean lines" },
      { icon: "🏡", tip: "Display items in natural settings" }
    ]
  },
  sample_stories: {
    "Textiles & Handloom": {
      social: "🧶 Every thread in my handloom weaves a story of tradition passed down through generations. From my grandmother's skilled hands to mine, each textile celebrates the rich heritage of {location}. Crafted with natural fibers and traditional techniques, my work brings ancient artistry to modern homes. #HandloomHeritage #TraditionalTextiles #HandmadeWithLove",
      product: "This exquisite handloom textile represents the culmination of generations of weaving expertise from {location}. Each piece is meticulously crafted using traditional techniques passed down through my family, featuring intricate patterns that tell stories of our cultural heritage. The natural fibers are carefully selected and dyed using time-honored methods, ensuring both authenticity and durability.",
      brand: "In the gentle rhythm of the handloom, {name} continues a legacy that has defined her family for generations. From her village in {location}, she weaves more than fabric – she weaves stories, memories, and dreams into every thread. Each morning, as she sits at the same loom her grandmother once used, she connects the wisdom of the past with the aspirations of the future."
    },
    "Pottery & Ceramics": {
      social: "🏺 From clay to creation – each piece I shape carries the spirit of my ancestors and the earth of {location}. Using traditional pottery wheels and natural glazes, I create functional art that connects your home to centuries of ceramic mastery. #TraditionalPottery #HandmadeCeramics #CeramicArt",
      product: "This beautiful ceramic piece showcases the ancient art of pottery from {location}, crafted entirely by hand using traditional techniques. Shaped on a potter's wheel and fired in kilns using methods perfected over centuries, each item displays unique characteristics that make it truly one-of-a-kind.",
      brand: "With hands covered in clay and a heart full of tradition, {name} shapes more than pottery – she molds connections between past and present. In her workshop in {location}, the ancient potter's wheel spins stories of resilience, creativity, and cultural preservation."
    },
    "Jewelry & Metalwork": {
      social: "💍 Every piece of jewelry I create tells a story of skilled metalwork passed down through generations. Using traditional techniques and finest materials, I craft adornments that celebrate both heritage and individual beauty. #TraditionalJewelry #HandcraftedWithLove #HeritageJewelry",
      product: "This stunning piece of jewelry represents the finest in traditional metalworking from {location}. Handcrafted using techniques refined over generations, each element is carefully shaped, carved, and finished to perfection. The intricate details reflect centuries of artistic evolution, while the quality materials ensure lasting beauty and durability.",
      brand: "In the delicate dance of hammer on metal, {name} continues an ancient art form that has adorned royalty and common people alike. From her workshop in {location}, she creates jewelry that transcends mere ornamentation, crafting pieces that carry stories, blessings, and the accumulated wisdom of countless generations."
    },
    "Wood Carving": {
      social: "🪵 Each carving tells a story etched in wood, shaped by hands that learned from generations of master craftsmen in {location}. Using traditional tools and sustainable wood, I create pieces that bring the warmth of handmade artistry to your space. #WoodCarving #HandmadeCrafts #TraditionalArt",
      product: "This masterful wood carving represents the finest traditions of woodworking from {location}. Each piece is hand-carved using time-honored techniques and tools passed down through generations. The natural wood grain enhances the beauty of the design, while expert finishing ensures durability and longevity.",
      brand: "In the quiet of his workshop in {location}, {name} continues an ancient dialogue between craftsman and wood. Each carving emerges from this conversation, shaped not just by skilled hands, but by generations of wisdom whispered through traditional techniques and cultural heritage."
    }
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupStoryGenerator();
  setupTabSwitching();
  setupPhotographyCategories();
  setupCopyToClipboard();
  setupMobileMenu();
  setupScrollAnimations();
}

// Navigation Setup
function setupNavigation() {
  // Setup smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = 80;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Setup CTA buttons to navigate to story generator
  document.querySelectorAll('.btn').forEach(btn => {
    if (btn.textContent.includes('Start') || btn.textContent.includes('Get Started')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const storySection = document.getElementById('story-generator');
        if (storySection) {
          const navbarHeight = 80;
          const targetPosition = storySection.offsetTop - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    }
  });
}

// Story Generator Setup
function setupStoryGenerator() {
  const generateBtn = document.getElementById('generate-story');
  
  if (generateBtn) {
    generateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      generateAIStory();
    });
  }
}

function generateAIStory() {
  console.log('Generate AI Story clicked');
  
  const nameInput = document.getElementById('artisan-name');
  const craftInput = document.getElementById('craft-type');
  const locationInput = document.getElementById('location');
  const heritageInput = document.getElementById('heritage-story');
  const languageInput = document.getElementById('content-language');

  if (!nameInput || !craftInput || !locationInput) {
    showToast('Form elements not found', 'error');
    return;
  }

  const formData = {
    name: nameInput.value.trim(),
    craft: craftInput.value,
    location: locationInput.value.trim(),
    heritage: heritageInput ? heritageInput.value.trim() : '',
    language: languageInput ? languageInput.value : 'en'
  };

  console.log('Form data:', formData);

  // Validate required fields
  if (!formData.name || !formData.craft || !formData.location) {
    showToast('Please fill in your name, craft type, and location', 'error');
    return;
  }

  // Show loading state
  const generateBtn = document.getElementById('generate-story');
  if (generateBtn) {
    generateBtn.classList.add('loading');
    generateBtn.innerHTML = '<span class="spinner"></span> Generating AI Story...';
  }

  // Simulate AI processing time
  setTimeout(() => {
    const stories = generateStoriesForCraft(formData);
    displayGeneratedStories(stories);
    
    // Reset button
    if (generateBtn) {
      generateBtn.classList.remove('loading');
      generateBtn.innerHTML = '✨ Generate AI Story';
    }
    
    showToast('AI stories generated successfully!', 'success');
  }, 2000);
}

function generateStoriesForCraft(formData) {
  let templates = applicationData.sample_stories[formData.craft];
  
  if (!templates) {
    templates = applicationData.sample_stories["Textiles & Handloom"];
  }
  
  const replacements = {
    '{name}': formData.name,
    '{location}': formData.location,
    '{craft}': formData.craft.toLowerCase(),
    '{heritage}': formData.heritage || 'generations'
  };

  const stories = {};
  
  Object.keys(templates).forEach(type => {
    let story = templates[type];
    Object.keys(replacements).forEach(placeholder => {
      story = story.replace(new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g'), replacements[placeholder]);
    });
    stories[type] = story;
  });

  console.log('Generated stories:', stories);
  return stories;
}

function displayGeneratedStories(stories) {
  // Update social media content
  const socialText = document.getElementById('social-text');
  if (socialText) {
    socialText.textContent = stories.social;
  }

  // Update product description
  const productText = document.getElementById('product-text');
  if (productText) {
    productText.textContent = stories.product;
  }

  // Update brand story
  const brandText = document.getElementById('brand-text');
  if (brandText) {
    brandText.textContent = stories.brand;
  }

  // Make sure the first tab is active
  const firstTab = document.querySelector('.tab-btn[data-tab="social"]');
  const firstContent = document.getElementById('social-content');
  
  if (firstTab && firstContent) {
    // Reset all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Activate first tab
    firstTab.classList.add('active');
    firstContent.classList.add('active');
  }

  console.log('Stories displayed');
}

// Tab Switching Setup
function setupTabSwitching() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const tabName = this.getAttribute('data-tab');
      console.log('Tab clicked:', tabName);
      
      // Remove active class from all tabs and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Add active class to corresponding content
      const targetContent = document.getElementById(`${tabName}-content`);
      if (targetContent) {
        targetContent.classList.add('active');
        console.log('Activated content for:', tabName);
      }
    });
  });
}

// Photography Categories Setup
function setupPhotographyCategories() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-category');
      console.log('Photography category clicked:', category);
      
      // Update active state
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Update tips content
      updatePhotographyTips(category);
    });
  });
}

function updatePhotographyTips(category) {
  const tipsData = applicationData.photography_tips[category];
  const photoTips = document.getElementById('photo-tips');
  
  if (tipsData && photoTips) {
    const categoryNames = {
      textiles: 'Textiles',
      pottery: 'Pottery',
      jewelry: 'Jewelry',
      wood: 'Wood Carving'
    };
    
    const categoryName = categoryNames[category] || 'Crafts';
    
    photoTips.innerHTML = `
      <h3>Photography Tips for ${categoryName}</h3>
      <div class="tips-grid">
        ${tipsData.map(tip => `
          <div class="tip-card">
            <div class="tip-icon">${tip.icon}</div>
            <p>${tip.tip}</p>
          </div>
        `).join('')}
      </div>
    `;
    
    console.log('Updated photography tips for:', categoryName);
  }
}

// Copy to Clipboard Setup
function setupCopyToClipboard() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  
  copyBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const text = targetElement.textContent;
        
        // Use modern clipboard API if available
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => {
            showCopySuccess(this);
          }).catch(err => {
            console.error('Clipboard error:', err);
            showToast('Failed to copy content', 'error');
          });
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            showCopySuccess(this);
          } catch (err) {
            console.error('Copy command failed:', err);
            showToast('Failed to copy content', 'error');
          }
          document.body.removeChild(textArea);
        }
      }
    });
  });
}

function showCopySuccess(button) {
  showToast('Content copied to clipboard!', 'success');
  
  // Visual feedback on button
  const originalText = button.textContent;
  button.textContent = '✓ Copied!';
  button.style.backgroundColor = 'var(--color-success)';
  button.style.color = 'white';
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = '';
    button.style.color = '';
  }, 2000);
}

// Mobile Menu Setup
function setupMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('mobile-active');
    });
  }
}

// Scroll Animations Setup
function setupScrollAnimations() {
  // Simple scroll-to-top on page load
  window.scrollTo(0, 0);
  
  // Add navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

// Toast Notifications
function showToast(message, type = 'info') {
  console.log('Toast:', message, type);
  
  // Remove existing toasts
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${getToastIcon(type)}</span>
      <span class="toast-message">${message}</span>
    </div>
  `;

  // Add CSS for toast if not exists
  if (!document.querySelector('#toast-styles')) {
    const toastStyles = document.createElement('style');
    toastStyles.id = 'toast-styles';
    toastStyles.textContent = `
      .toast {
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-base);
        padding: var(--space-12) var(--space-16);
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
      }
      
      .toast--success {
        border-left: 4px solid var(--color-success);
      }
      
      .toast--error {
        border-left: 4px solid var(--color-error);
      }
      
      .toast--info {
        border-left: 4px solid var(--color-info);
      }
      
      .toast-content {
        display: flex;
        align-items: center;
        gap: var(--space-8);
      }
      
      .toast-icon {
        font-size: var(--font-size-lg);
      }
      
      .toast-message {
        color: var(--color-text);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(toastStyles);
  }

  document.body.appendChild(toast);

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 3000);
}

function getToastIcon(type) {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  return icons[type] || icons.info;
}

// Additional Interactive Features
document.addEventListener('click', function(e) {
  // Handle enhancement tool buttons
  if (e.target.closest('.enhancement-tools .btn')) {
    const btn = e.target.closest('.btn');
    const tool = btn.textContent.trim();
    
    showToast(`${tool} activated! Professional tools coming in full version.`, 'info');
  }

  // Handle tutorial buttons
  if (e.target.closest('.tutorial-card .btn')) {
    showToast('Interactive tutorials available in full platform', 'info');
  }

  // Handle chatbot
  if (e.target.closest('.chat-input .btn')) {
    const input = e.target.closest('.chat-input').querySelector('input');
    const message = input.value.trim();
    
    if (message) {
      input.value = '';
      showToast('AI Assistant: Thank you for your question! Full chat support coming soon.', 'info');
    }
  }
});

console.log('Karigari AI Platform loaded successfully!');