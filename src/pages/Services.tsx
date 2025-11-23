import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import WorkflowCard from '../components/WorkflowCard';

const Services = () => {
  const whatsappLink = "https://wa.me/8801763636997";
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'web' | 'automation' | 'marketing'>('web');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'web' || tab === 'automation' || tab === 'marketing') {
      setActiveTab(tab);
    }
    window.scrollTo(0, 0);
  }, [location]);

  const webDevServices = [
    {
      title: "Custom Website",
      description: "Fully customized website tailored to your brand and business requirements",
      features: ["Responsive Design", "Modern UI/UX", "Fast Loading", "SEO Friendly"],
      addons: ["AI Integration", "AI Chatbot", "SEO Optimization", "Tag Management"]
    },
    {
      title: "E-commerce Website",
      description: "Complete online store with payment integration and inventory management",
      features: ["Product Management", "Payment Gateway", "Order Tracking", "Customer Dashboard"],
      addons: ["AI Integration", "AI Chatbot", "SEO Optimization", "Tag Management"]
    },
    {
      title: "Blog",
      description: "Professional blogging platform with content management system",
      features: ["CMS Integration", "Comment System", "Categories & Tags", "Author Management"],
      addons: ["AI Integration", "AI Chatbot", "SEO Optimization", "Tag Management"]
    },
    {
      title: "Forum",
      description: "Community discussion platform with user engagement features",
      features: ["User Registration", "Topic Management", "Moderation Tools", "Private Messaging"],
      addons: ["AI Integration", "AI Chatbot", "SEO Optimization", "Tag Management"]
    },
    {
      title: "Events Platform",
      description: "Event management and booking system with calendar integration",
      features: ["Event Listing", "Booking System", "Calendar Integration", "Email Notifications"],
      addons: ["AI Integration", "AI Chatbot", "SEO Optimization", "Tag Management"]
    }
  ];

  const bundlePacks = [
    {
      title: "🚀 AI Automation Growth Bundle",
      price: "$500/month",
      description: "Complete Social Media Automation & Lead Generation System - Generate 100-500 leads per day automatically",
      features: [
        "Automated Social Media Content Creator & Publisher - Auto-posts Reels, Carousels, and Stories to Facebook, Instagram, and LinkedIn",
        "AI Generated Faceless YouTube Shorts Creator - Generates 10-50 viral Shorts and Reels per day",
        "AI Generated Social Media Carousel Creator - Creates viral educational carousels automatically",
        "LinkedIn Comment Lead Generation & Qualification System - Works on Facebook, Instagram, and LinkedIn",
        "Automated AI Phone Calls & Lead Processing - 24/7 automated follow-up with Bangladeshi accent support"
      ],
      benefits: [
        "100-500 hot leads per day",
        "Fully Automated - Set it once, runs forever",
        "Multi-Platform - FB, IG, LinkedIn, YouTube",
        "Lead Qualification - Only hot leads reach you",
        "AI-Powered with latest technology"
      ]
    },
    {
      title: "🎨 Social Media Content Automation",
      price: "$300/month",
      description: "Never create content manually again - Automated content creation & publishing across all major platforms",
      features: [
        "Automated Social Media Content Creator & Publisher - Auto-posts Reels, Carousels, and Stories daily",
        "AI Generated Social Media Carousel Creator - Creates viral educational carousels tailored to your products"
      ],
      benefits: [
        "365+ Posts Per Year",
        "3 Platforms Covered",
        "0 Hours of Manual Work",
        "100% Automated",
        "Set & Forget - Configure once, runs forever",
        "Targeted Content - Tailored to your audience"
      ]
    }
  ];

  const workflows = [
    {
      title: "WhatsApp AI Assistant for E-commerce Support",
      description: "Automatically responds to WhatsApp messages using AI, handles customer inquiries about inventory and orders, and logs support tickets",
      emoji: "💁‍♀️",
      tags: ["Messaging", "E-commerce", "Customer Support"]
    },
    {
      title: "Automated Travel Planning and Email Booking System",
      description: "Takes travel preferences via webhook, searches for flights and hotels using APIs, then generates and emails a complete itinerary",
      emoji: "✈️",
      tags: ["Messaging", "Content Creation", "Data Processing"]
    },
    {
      title: "AI Resume Screening and Candidate Evaluation",
      description: "Analyzes uploaded resumes against job descriptions using AI to evaluate candidate fit, strengths, and weaknesses",
      emoji: "✅",
      tags: ["Jobs", "Data Processing"]
    },
    {
      title: "AI Research Router with Specialized Agents",
      description: "Routes research queries to specialized agents for company reviews, market analysis, or social media research using AI",
      emoji: "🔎",
      tags: ["Messaging", "Data Processing", "Content Creation"]
    },
    {
      title: "AI Video Style Transfer and Transformation",
      description: "Upload a video and apply artistic styles like anime, watercolor, or cyberpunk using AI processing",
      emoji: "🎨",
      tags: ["Videos", "Content Creation"]
    },
    {
      title: "Daily AI Trend Monitoring and Analysis",
      description: "Automatically monitors Twitter accounts and websites daily to collect recent content, then uses AI to analyze trends",
      emoji: "📈",
      tags: ["Social Media", "Web Scraping", "Data Processing"]
    },
    {
      title: "Automated Competitor Intelligence Research",
      description: "Automatically researches competitors by gathering business metrics, social data, and website traffic",
      emoji: "💡",
      tags: ["Data Processing", "Web Scraping", "Lead Generation"]
    },
    {
      title: "YouTube Content Strategy Analysis Tool",
      description: "Analyzes YouTube channels and videos to extract successful title patterns, thumbnail strategies, and audience insights",
      emoji: "📈",
      tags: ["Web Scraping", "Data Processing", "Videos"]
    },
    {
      title: "Create AI Talking Avatar from Image Audio",
      description: "Takes an uploaded image and audio file to generate a talking avatar video using AI service",
      emoji: "🗣️",
      tags: ["Content Creation", "Videos", "Developer tools"]
    },
    {
      title: "Generate Product Videos Using AI API",
      description: "Creates product videos by submitting requests to an AI video generation API",
      emoji: "🎬",
      tags: ["Videos", "Content Creation", "Developer tools"]
    },
    {
      title: "AI Product Photo to Video Generator",
      description: "Converts product photos into professional marketing videos using AI analysis and automated video generation",
      emoji: "🎥",
      tags: ["Content Creation", "Videos", "Marketing"]
    },
    {
      title: "AI Video Motion Transfer From Image",
      description: "Transfers motion from an uploaded video to a static image using AI processing",
      emoji: "🎥",
      tags: ["Videos", "Content Creation"]
    },
    {
      title: "Automated AI Avatar News Video Creator",
      description: "Automatically fetches trending AI news, generates avatar videos with scripts, and publishes across social media",
      emoji: "🎥",
      tags: ["News", "Content Creation", "Social Media"]
    },
    {
      title: "Automated Newsletter Generation System",
      description: "Creates branded newsletters by researching topics, extracting brand colors from websites, and sending personalized emails",
      emoji: "✉️",
      tags: ["Content Creation", "Messaging", "Web Scraping"]
    },
    {
      title: "AI-Powered YouTube Thumbnail Generator",
      description: "Creates professional YouTube thumbnails by generating design concepts from video details",
      emoji: "🖼️",
      tags: ["Content Creation", "Videos", "Data Processing"]
    },
    {
      title: "AI Social Media Content Generator",
      description: "Automatically creates social media posts from topics or articles, generates custom images, and publishes content",
      emoji: "📣",
      tags: ["Social Media", "Content Creation", "Web Scraping"]
    },
    {
      title: "AI Powered Social Media Animation Creator",
      description: "Creates animated social media videos by transforming user photos into cinematic Instagram-style animations",
      emoji: "🎬",
      tags: ["Content Creation", "Developer tools"]
    },
    {
      title: "Multi Platform Social Media Content Scraper",
      description: "Automatically scrapes content from LinkedIn, YouTube, Instagram, and X (Twitter) based on URL input",
      emoji: "🔍",
      tags: ["Web Scraping", "Data Processing", "Content Creation"]
    },
    {
      title: "Automated Video Sales Letter Script Generator",
      description: "Creates VSL scripts by researching products, generating marketing angles, and producing scripts with feedback loops",
      emoji: "✍️",
      tags: ["Marketing", "Content Creation", "Web Scraping"]
    },
    {
      title: "AI Sales Proposal Generator from Calls",
      description: "Automatically creates personalized sales proposals by transcribing call recordings and using AI",
      emoji: "✍️",
      tags: ["Data Processing", "Content Creation", "Messaging"]
    },
    {
      title: "AI Twitter Posts with Human Approval",
      description: "Creates AI-generated Twitter posts from Telegram requests with human review before publishing",
      emoji: "📢",
      tags: ["Social Media", "Messaging", "Content Creation"]
    },
    {
      title: "AI Hollywood Style Product Advertisement",
      description: "Creates professional VFX advertisement videos by analyzing uploaded product images",
      emoji: "🎬",
      tags: ["Videos", "Content Creation", "Data Processing"]
    },
    {
      title: "AI Marketing Content Generator with Research",
      description: "Automatically creates social media posts and blog content by researching topics through web scraping",
      emoji: "✍️",
      tags: ["Web Scraping", "Data Processing", "Content Creation"]
    },
    {
      title: "Generate LinkedIn Posts with AI Images",
      description: "Creates professional LinkedIn posts with research-backed content and matching visual graphics",
      emoji: "📢",
      tags: ["Content Creation", "Social Media", "Messaging"]
    },
    {
      title: "Google Maps Lead Scraper",
      description: "Scrapes web content and Instagram data to generate blog posts and social media content using AI",
      emoji: "✍️",
      tags: ["Web Scraping", "Data Processing", "Content Creation"]
    },
    {
      title: "Telegram Email Verification Bot",
      description: "Takes a person's name and domain via Telegram, generates possible email patterns, and verifies them",
      emoji: "🔍",
      tags: ["Messaging", "Data Processing", "Lead Generation"]
    },
    {
      title: "Generate Personalized Cold Emails",
      description: "Scrapes lead information from Apollo, analyzes their websites, and uses AI to create personalized cold emails",
      emoji: "📧",
      tags: ["Lead Generation", "Web Scraping", "Data Processing"]
    },
    {
      title: "AI Motion Graphics Video Generator",
      description: "Creates motion graphics videos by analyzing uploaded images and generating smooth transitions",
      emoji: "🎬",
      tags: ["Videos", "Content Creation", "Data Processing"]
    },
    {
      title: "AI Marketing Ad Creator via Telegram",
      description: "Creates marketing ads with images and videos from Telegram photos using AI",
      emoji: "📣",
      tags: ["Messaging", "Videos", "Content Creation"]
    },
    {
      title: "Extract Project Data to Google Sheets",
      description: "Uses AI to parse JSON queries and extract project information, then updates Google Sheet",
      emoji: "📋",
      tags: ["Data Processing", "Content Creation"]
    },
    {
      title: "Store Google Docs in Pinecone Database",
      description: "Retrieves content from a Google Doc and stores it as vector embeddings in Pinecone",
      emoji: "💾",
      tags: ["Data Processing", "Developer tools"]
    },
    {
      title: "AI Powered Email Composition",
      description: "Uses AI to parse natural language queries and automatically compose and send emails through Gmail",
      emoji: "📧",
      tags: ["Messaging", "Data Processing"]
    },
    {
      title: "AI Email Fetcher with Date Query",
      description: "Processes date queries to fetch unread emails from Gmail and generates AI-powered summaries",
      emoji: "📝",
      tags: ["Messaging", "Content Creation", "Data Processing"]
    },
    {
      title: "AI Calendar Summary from Google Calendar",
      description: "Retrieves Google Calendar events for a requested date and generates an AI-powered summary",
      emoji: "📅",
      tags: ["Project Management", "Data Processing", "Content Creation"]
    },
    {
      title: "Create Calendar Events from Natural Language",
      description: "Parses natural language text to extract event details and automatically creates calendar events",
      emoji: "📅",
      tags: ["Project Management", "Data Processing"]
    },
    {
      title: "Summarize Google Sheets with AI",
      description: "Reads project data from Google Sheets and uses OpenAI to generate summaries of each project",
      emoji: "📝",
      tags: ["Data Processing", "Content Creation"]
    },
    {
      title: "LinkedIn Comment Lead Generation",
      description: "Scrapes LinkedIn post comments, analyzes profiles, qualifies leads, and generates personalized outreach",
      emoji: "🤝",
      tags: ["Web Scraping", "Data Processing", "Content Creation"]
    },
    {
      title: "Automated News Video with HeyGen Avatar",
      description: "Scrapes Morning Brew newsletter content, converts it to a video script, and generates news recap video",
      emoji: "📺",
      tags: ["Videos", "Web Scraping", "Content Creation"]
    },
    {
      title: "AI Social Media Carousel Creator",
      description: "Automatically generates motivational quote carousels and publishes to multiple social platforms",
      emoji: "📣",
      tags: ["Social Media", "Content Creation", "Videos"]
    },
    {
      title: "AI Lead Generation and Outreach",
      description: "Automatically finds leads, scrapes their websites, and generates personalized cold emails using AI",
      emoji: "📈",
      tags: ["Web Scraping", "Lead Generation", "Marketing"]
    },
    {
      title: "Telegram AI Assistant for Email & Calendar",
      description: "AI-powered assistant accessible through Telegram that manages emails, calendar events, and contacts",
      emoji: "🤖",
      tags: ["Messaging", "Project Management", "CRM"]
    },
    {
      title: "AI Sales Research and Email Generator",
      description: "Automatically researches prospects and companies, then generates personalized sales emails and SMS",
      emoji: "📈",
      tags: ["Data Processing", "Web Scraping", "Messaging"]
    },
    {
      title: "Automated Hiring Process Management",
      description: "Automates the complete hiring workflow from Gmail applications through candidate screening and scheduling",
      emoji: "🧑‍💼",
      tags: ["Jobs", "Messaging", "Data Processing"]
    },
    {
      title: "Automated Lead Processing with AI Calls",
      description: "Processes form submissions, scrapes websites, finds LinkedIn profiles, and initiates AI phone calls",
      emoji: "📞",
      tags: ["Messaging", "Web Scraping", "Lead Generation"]
    },
    {
      title: "Facebook Ad Spy and Analysis Tool",
      description: "Scrapes Facebook ads by keyword and country, then uses AI to analyze video, image, and text ads",
      emoji: "📊",
      tags: ["Web Scraping", "Data Processing", "Marketing"]
    },
    {
      title: "Google Maps Business Lead Scraper",
      description: "Scrapes business information from Google Maps and extracts contact emails from business websites",
      emoji: "📈",
      tags: ["Web Scraping", "Lead Generation", "Data Processing"]
    },
    {
      title: "AI Logo Animation Generator",
      description: "Analyzes logo images and generates dynamic video animations with customizable visual styles",
      emoji: "🎬",
      tags: ["Content Creation", "Videos", "Data Processing"]
    },
    {
      title: "Automated Lead Generation and Email System",
      description: "Scrapes leads from Apollo based on criteria and generates personalized outreach emails using AI",
      emoji: "🤝",
      tags: ["Lead Generation", "Web Scraping", "Marketing"]
    },
    {
      title: "Telegram AI Assistant with Google Services",
      description: "AI-powered assistant that responds to Telegram messages and performs tasks like sending emails",
      emoji: "🤖",
      tags: ["Messaging", "Project Management", "Data Processing"]
    },
    {
      title: "Convert Images to Studio Ghibli Videos",
      description: "Upload an image to convert it to Studio Ghibli art style, then generate an animated video",
      emoji: "🎬",
      tags: ["Videos", "Content Creation", "Data Processing"]
    },
    {
      title: "Apollo Lead Scraper with Google Sheets",
      description: "Scrapes contact leads from Apollo based on job titles and locations, stores in Google Sheets",
      emoji: "👤",
      tags: ["Web Scraping", "Lead Generation", "Data Processing"]
    },
    {
      title: "Automated LinkedIn Post Generation",
      description: "Automatically creates LinkedIn posts by finding topics from Google Sheets and researching them online",
      emoji: "✍️",
      tags: ["Content Creation", "Social Media", "Data Processing"]
    },
    {
      title: "Automated Social Media Creator & Publisher",
      description: "Creates social media posts from topics, generates custom images, and publishes to Facebook, Instagram, LinkedIn",
      emoji: "📢",
      tags: ["Social Media", "Content Creation", "Web Scraping"]
    },
    {
      title: "Telegram Bot for Lead Generation",
      description: "A Telegram bot that extracts lead information based on job titles and locations",
      emoji: "🔍",
      tags: ["Lead Generation", "Web Scraping", "Messaging"]
    },
    {
      title: "AI Multi-Step Research Report Generator",
      description: "Conducts comprehensive research by asking questions, performing web searches, and generating reports",
      emoji: "📝",
      tags: ["Content Creation", "Data Processing", "Web Scraping"]
    },
    {
      title: "Telegram Bot for Stock Technical Analysis",
      description: "Analyzes stock charts and provides technical analysis reports via Telegram",
      emoji: "📈",
      tags: ["Financial", "Data Processing", "Messaging"]
    },
    {
      title: "AI Faceless YouTube Shorts Creator",
      description: "Creates viral short-form videos by generating scripts, researching content, and producing faceless videos",
      emoji: "🎬",
      tags: ["Content Creation", "Videos", "Messaging"]
    },
    {
      title: "AI Video Analysis with Google Gemini",
      description: "Analyzes uploaded video files or YouTube URLs using Google's Gemini AI to generate descriptions",
      emoji: "📝",
      tags: ["Content Creation", "Data Processing"]
    },
    {
      title: "AI Support Agent with Email Escalation",
      description: "An AI chatbot that answers customer questions using FAQ knowledge and sends emails when needed",
      emoji: "🆘",
      tags: ["Customer Support", "Messaging"]
    },
    {
      title: "AI Product Image to CGI Video",
      description: "Upload a product image to automatically generate cinematic CGI advertisement videos",
      emoji: "🎬",
      tags: ["Content Creation", "Videos", "Marketing"]
    },
    {
      title: "Generate ASMR Videos from Text",
      description: "Takes user descriptions of ASMR scenes and generates cinematic videos using AI",
      emoji: "🎬",
      tags: ["Videos", "Content Creation"]
    },
    {
      title: "AI Generated Viral Video Content Creator",
      description: "Creates humorous short videos featuring mythological characters as modern influencers",
      emoji: "🎬",
      tags: ["Videos", "Content Creation"]
    },
    {
      title: "Automated YouTube Script Writing with AI",
      description: "Automatically generates YouTube video scripts by researching topics online and creating outlines",
      emoji: "✍️",
      tags: ["Content Creation", "Videos", "Data Processing"]
    },
    {
      title: "YouTube Video Research and Performance Tool",
      description: "Searches YouTube for videos on a topic, analyzes performance metrics and engagement data",
      emoji: "📈",
      tags: ["Videos", "Messaging", "Web Scraping"]
    },
    {
      title: "Reddit Business Problem Research Tool",
      description: "Searches Reddit posts for business problems, analyzes market gaps, and generates reports",
      emoji: "💡",
      tags: ["Web Scraping", "Data Processing", "Content Creation"]
    },
    {
      title: "YouTube Comment Analysis and Reply",
      description: "Analyzes YouTube video comments using AI to classify them and generates appropriate responses",
      emoji: "💬",
      tags: ["Social Media", "Content Creation", "Data Processing"]
    },
    {
      title: "Product Image to Model Animation Video",
      description: "Takes uploaded clothing product images and creates animated videos of models wearing the items",
      emoji: "🎥",
      tags: ["Content Creation", "Developer tools"]
    },
    {
      title: "AI-Powered Online Course Generator",
      description: "Creates complete online courses with modules, content, and voiceover scripts from a topic input",
      emoji: "🎓",
      tags: ["Content Creation", "Web Scraping", "Data Processing"]
    },
    {
      title: "YouTube Comment Analysis for Content Ideas",
      description: "Analyzes YouTube video comments to identify potential content ideas and researches topics using AI",
      emoji: "💡",
      tags: ["Messaging", "Social Media", "Web Scraping"]
    },
    {
      title: "Product Image to 360 Degree Video",
      description: "Upload a product image to automatically generate a 360-degree rotating CGI video advertisement",
      emoji: "🎬",
      tags: ["Content Creation", "Marketing", "Data Processing"]
    },
    {
      title: "AI Chat Bot for Marketing Copy",
      description: "Routes user requests to specialized AI agents that create ad copy, video scripts, or cold emails",
      emoji: "✍️",
      tags: ["Content Creation", "Marketing", "Lead Generation"]
    },
    {
      title: "Automated AI Phone Calls from Forms",
      description: "Creates an AI-powered phone call to users when they submit a contact form",
      emoji: "📞",
      tags: ["Lead Generation", "Messaging"]
    },
    {
      title: "YouTube Video Analysis and Optimization",
      description: "Analyzes trending YouTube videos, generates improved titles and thumbnails, creates new video outlines",
      emoji: "📈",
      tags: ["Videos", "Content Creation", "Web Scraping"]
    },
    {
      title: "AI UGC Video Ad Generator",
      description: "Creates user-generated content style video advertisements from product images and instructions",
      emoji: "🎬",
      tags: ["Content Creation", "Marketing", "Data Processing"]
    },
    {
      title: "Automated Job Search with AI Cover Letters",
      description: "Searches LinkedIn for jobs based on location and title, then uses AI to score job matches",
      emoji: "💼",
      tags: ["Jobs", "Web Scraping", "Data Processing"]
    }
  ];

  const digitalMarketingPlans = [
    {
      platforms: 2,
      price: "$50",
      features: ["Content Strategy", "2 Platforms Management", "Basic Analytics", "Monthly Reporting"]
    },
    {
      platforms: 3,
      price: "$100",
      features: ["Content Strategy", "3 Platforms Management", "Advanced Analytics", "Bi-weekly Reporting", "Audience Engagement"]
    },
    {
      platforms: 4,
      price: "$200",
      features: ["Content Strategy", "4 Platforms Management", "Premium Analytics", "Weekly Reporting", "Audience Engagement", "Ad Campaign Management"]
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="services-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="services-tabs">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'web' ? 'active' : ''}`}
              onClick={() => setActiveTab('web')}
            >
              Web Development
            </button>
            <button 
              className={`tab ${activeTab === 'automation' ? 'active' : ''}`}
              onClick={() => setActiveTab('automation')}
            >
              AI Automation
            </button>
            <button 
              className={`tab ${activeTab === 'marketing' ? 'active' : ''}`}
              onClick={() => setActiveTab('marketing')}
            >
              Digital Marketing
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'web' && (
              <div className="web-development-section">
                <h2>Web Development Services</h2>
                <p className="section-intro">
                  Professional website development with modern technologies and responsive design. 
                  All prices are negotiable, and addon services carry extra charges.
                </p>
                
                <div className="services-grid">
                  {webDevServices.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      description={service.description}
                      features={service.features}
                      onOrder={() => window.open(whatsappLink, '_blank')}
                    />
                  ))}
                </div>

                <div className="addons-section">
                  <h3>Available Add-ons (Extra Charge)</h3>
                  <div className="addons-grid">
                    <div className="addon-card">
                      <h4>🤖 AI Integration</h4>
                      <p>Integrate AI capabilities into your website for enhanced functionality</p>
                    </div>
                    <div className="addon-card">
                      <h4>💬 AI Chatbot</h4>
                      <p>24/7 customer support with intelligent AI-powered chatbot</p>
                    </div>
                    <div className="addon-card">
                      <h4>🔍 SEO Optimization</h4>
                      <p>Complete SEO setup to improve your search engine rankings</p>
                    </div>
                    <div className="addon-card">
                      <h4>🏷️ Tag Management</h4>
                      <p>Meta tags and Google Tag Manager setup for analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'automation' && (
              <div className="automation-section">
                <h2>AI Automation Services</h2>
                
                <div className="bundle-packs">
                  <h3>Premium Bundle Packs</h3>
                  {bundlePacks.map((bundle, index) => (
                    <div key={index} className="bundle-card">
                      <div className="bundle-header">
                        <h3>{bundle.title}</h3>
                        <span className="bundle-price">{bundle.price}</span>
                      </div>
                      <p className="bundle-description">{bundle.description}</p>
                      
                      <div className="bundle-content">
                        <div className="bundle-section">
                          <h4>What's Included:</h4>
                          <ul>
                            {bundle.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bundle-section">
                          <h4>The Results:</h4>
                          <ul>
                            {bundle.benefits.map((benefit, idx) => (
                              <li key={idx}>✓ {benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bundle-cta"
                      >
                        Get Started Now
                      </a>
                    </div>
                  ))}
                </div>

                <div className="workflows-section">
                  <h3>Individual Automation Workflows</h3>
                  <p className="workflows-intro">
                    Choose from 79 pre-built automation workflows. Each workflow is available 
                    without API for $50 or with API integration (contact for pricing).
                  </p>
                  
                  <div className="workflows-grid">
                    {workflows.map((workflow, index) => (
                      <WorkflowCard
                        key={index}
                        title={workflow.title}
                        description={workflow.description}
                        emoji={workflow.emoji}
                        tags={workflow.tags}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'marketing' && (
              <div className="marketing-section">
                <h2>Digital Marketing Services</h2>
                <p className="section-intro">
                  Comprehensive digital marketing solutions across multiple platforms to 
                  grow your brand and reach your target audience effectively.
                </p>
                
                <div className="marketing-plans">
                  {digitalMarketingPlans.map((plan, index) => (
                    <div key={index} className="marketing-plan-card">
                      <div className="plan-header">
                        <div className="plan-platforms">{plan.platforms} Platforms</div>
                        <div className="plan-price">{plan.price}<span>/month</span></div>
                      </div>
                      <ul className="plan-features">
                        {plan.features.map((feature, idx) => (
                          <li key={idx}>✓ {feature}</li>
                        ))}
                      </ul>
                      <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="plan-cta"
                      >
                        Get Started
                      </a>
                    </div>
                  ))}
                </div>

                <div className="marketing-details">
                  <h3>What We Offer</h3>
                  <div className="marketing-features-grid">
                    {/* <div className="marketing-feature">
                      <div className="feature-icon">📊</div>
                      <h4>SEO & SEM</h4>
                      <p>Search engine optimization and marketing to improve visibility and drive traffic</p>
                    </div> */}
                    <div className="marketing-feature">
                      <div className="feature-icon">📱</div>
                      <h4>Social Media Marketing</h4>
                      <p>Strategic social media campaigns across Facebook, Instagram, LinkedIn, and more</p>
                    </div>
                    {/* <div className="marketing-feature">
                      <div className="feature-icon">✉️</div>
                      <h4>Email Marketing</h4>
                      <p>Targeted email campaigns to nurture leads and engage customers</p>
                    </div> */}
                    {/* <div className="marketing-feature">
                      <div className="feature-icon">📝</div>
                      <h4>Content Marketing</h4>
                      <p>High-quality content creation to attract and retain your audience</p>
                    </div> */}
                    <div className="marketing-feature">
                      <div className="feature-icon">📈</div>
                      <h4>Analytics & Reporting</h4>
                      <p>Detailed performance tracking and insights to optimize campaigns</p>
                    </div>
                    <div className="marketing-feature">
                      <div className="feature-icon">🎯</div>
                      <h4>Paid Advertising</h4>
                      <p>Strategic ad campaigns on Google, Facebook, Instagram, and LinkedIn</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Contact us today to discuss your project and get a customized solution 
            that fits your needs and budget.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
