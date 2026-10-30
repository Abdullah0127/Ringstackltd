/**
 * Central article data for the EDM Lead Network Resources & Insights system.
 *
 * Notes on the source of truth:
 * - Articles 1, 2 and 3 below are the proposed original drafts supplied in the
 *   project brief. They are intentionally structured as reusable content that
 *   can be edited in one place and rendered through the article system.
 * - When the reference site (https://edmleadnetwork.com/resources/) provides
 *   verified text for a real URL, that verified text should take precedence and
 *   the draft below can be replaced in this data file.
 */

export const ARTICLE_ROUTES = {
  'red-flags-evaluating-new-publisher': '/red-flags-evaluating-new-publisher/',
  'building-a-stronger-lead-generation-strategy': '/building-a-stronger-lead-generation-strategy/',
  'understanding-pay-per-call-marketing': '/understanding-pay-per-call-marketing/',
};

export const CATEGORIES = [
  'All Articles',
  'Publisher Insights',
  'Advertiser Insights',
  'Lead Generation',
  'Pay Per Call',
  'Marketing Strategies',
];

export const CATEGORY_LABELS = {
  'Publisher Insights': 'PUBLISHER INSIGHTS',
  'Advertiser Insights': 'ADVERTISER INSIGHTS',
  'Lead Generation': 'LEAD GENERATION',
  'Pay Per Call': 'PAY PER CALL',
  'Marketing Strategies': 'MARKETING STRATEGIES',
};

export const ARTICLES = [
  {
    slug: 'red-flags-evaluating-new-publisher',
    title: 'Red Flags to Watch for When Evaluating a New Publisher',
    category: 'Publisher Insights',
    excerpt:
      'Choosing the right publisher is essential to building a sustainable performance marketing program. Learn how to identify potential warning signs in traffic quality, compliance practices, communication, and operational transparency before they affect your campaigns.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Performance marketing analytics dashboard',
    keyPoints: [
      'Evaluate traffic quality and lead authenticity before increasing campaign volume.',
      'Review consent practices and compliance documentation before onboarding.',
      'Identify communication and operational warning signs early.',
      'Recognise the characteristics of reliable publishing partners.',
    ],
    featured: true,
    publishedAt: '2026-03-12',
    readingTime: '8 min read',
    metaTitle: 'Red Flags to Watch for When Evaluating a New Publisher',
    metaDescription:
      'Learn how to evaluate publisher quality, traffic sources, consent practices, communication, and compliance before partnering on performance marketing campaigns.',
    relatedSlugs: [
      'building-a-stronger-lead-generation-strategy',
      'understanding-pay-per-call-marketing',
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Choosing the right publisher is one of the most important decisions in performance marketing. A publisher who delivers high-quality, compliant traffic can accelerate campaign growth and improve return on ad spend. Conversely, working with a publisher whose practices do not meet your standards can erode performance, create compliance risk, and damage your brand.',
      },
      {
        type: 'heading',
        id: 'traffic-quality',
        text: 'Traffic Quality and Lead Authenticity',
      },
      {
        type: 'paragraph',
        text: 'Before expanding volume with any new publisher, examine the quality of the traffic they deliver. High-quality publishers consistently generate leads from real, interested consumers. Warning signs include unusually high lead volumes from a limited geographic area, inconsistent call durations, or a pattern of leads that do not match the stated targeting criteria.',
      },
      {
        type: 'paragraph',
        text: 'Ask publishers to describe their traffic sources in detail. Transparency about how and where they acquire consumers is a positive indicator. Reluctance to discuss traffic sources, or vague answers that do not hold up under follow-up questions, should give you pause.',
      },
      {
        type: 'heading',
        id: 'compliance-practices',
        text: 'Compliance Practices and Consent Documentation',
      },
      {
        type: 'paragraph',
        text: 'Consent practices are a critical area of evaluation. Publishers operating in regulated industries must be able to demonstrate that consumers have provided the appropriate consent before their information is shared or calls are initiated. Ask prospective publishers to share their consent language and describe how consent is captured and stored.',
      },
      {
        type: 'list',
        items: [
          'Request copies of consent disclosures used in lead capture forms.',
          'Ask how consent records are stored and for how long.',
          'Confirm how publishers handle do-not-call compliance.',
          'Review whether publishers conduct regular compliance audits.',
        ],
      },
      {
        type: 'heading',
        id: 'communication-red-flags',
        text: 'Communication and Operational Red Flags',
      },
      {
        type: 'paragraph',
        text: 'Publishers who are difficult to reach, slow to respond to questions, or evasive when problems arise present operational risk. Reliable partners communicate clearly, acknowledge issues promptly, and work collaboratively to resolve problems.',
      },
      {
        type: 'callout',
        title: 'Key Indicator',
        content: 'A publisher who responds quickly during the sales process but becomes difficult to reach once campaigns are running is a common and costly warning sign.',
      },
      {
        type: 'heading',
        id: 'reliable-partners',
        text: 'Characteristics of Reliable Publishing Partners',
      },
      {
        type: 'paragraph',
        text: 'The best publisher relationships are built on transparency, compliance, and consistent delivery. Reliable publishers are willing to share performance data, describe their operational processes, and engage in ongoing dialogue about campaign performance. They treat compliance as a business priority, not an afterthought.',
      },
      {
        type: 'paragraph',
        text: 'Investing time in thorough publisher evaluation before onboarding is far less costly than addressing the consequences of a poor partnership after campaigns are live. Establish clear standards, ask detailed questions, and take the time to verify the answers you receive.',
      },
    ],
  },
  {
    slug: 'building-a-stronger-lead-generation-strategy',
    title: 'Building a Stronger Lead Generation Strategy',
    category: 'Lead Generation',
    excerpt:
      'Learn how to improve lead generation through audience targeting, qualification, campaign measurement, and continuous optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Lead generation strategy planning',
    keyPoints: [
      'Define your ideal audience before launching a campaign.',
      'Establish clear lead qualification criteria to reduce wasted spend.',
      'Choose acquisition channels that match audience intent.',
      'Measure quality alongside volume using the right performance metrics.',
      'Test and optimize continuously with controlled experiments.',
    ],
    featured: false,
    publishedAt: '2026-02-18',
    readingTime: '6 min read',
    metaTitle: 'Building a Stronger Lead Generation Strategy',
    metaDescription:
      'Learn how to improve lead generation through audience targeting, qualification, campaign measurement, and continuous optimization.',
    relatedSlugs: [
      'red-flags-evaluating-new-publisher',
      'understanding-pay-per-call-marketing',
    ],
    content: [
      {
        type: 'paragraph',
        text: 'A well-constructed lead generation strategy is the foundation of sustainable marketing performance. Without clear audience definition, measurable qualification criteria, and a commitment to continuous improvement, campaigns frequently underperform and waste budget on leads that do not convert.',
      },
      {
        type: 'heading',
        id: 'define-your-audience',
        text: 'Define Your Ideal Audience',
      },
      {
        type: 'paragraph',
        text: 'Before launching any campaign, spend time defining the characteristics of your ideal customer. This includes demographic attributes such as age, location, and income level, as well as behavioral signals that indicate purchase intent. The more precisely you define your audience, the more effectively you can target acquisition channels and evaluate lead quality.',
      },
      {
        type: 'heading',
        id: 'lead-qualification',
        text: 'Establish Lead Qualification Criteria',
      },
      {
        type: 'paragraph',
        text: 'Qualification criteria define what makes a lead worth pursuing. Without clear standards, sales teams spend time on prospects who are unlikely to convert, increasing cost per acquisition and reducing overall return on investment.',
      },
      {
        type: 'list',
        items: [
          'Define minimum criteria a lead must meet before it is passed to sales.',
          'Distinguish between marketing-qualified and sales-qualified leads.',
          'Set thresholds for key attributes such as call duration, geographic location, or product interest.',
          'Review qualification criteria regularly and adjust based on conversion data.',
        ],
      },
      {
        type: 'heading',
        id: 'acquisition-channels',
        text: 'Choose Acquisition Channels That Match Audience Intent',
      },
      {
        type: 'paragraph',
        text: 'Different acquisition channels attract consumers at different stages of the purchase journey. Pay-per-call campaigns, for example, typically reach consumers who are actively seeking a product or service and are ready to engage in a conversation. Form fills may capture earlier-stage interest. Selecting channels that align with your audience\'s intent and your sales process improves conversion rates and reduces wasted spend.',
      },
      {
        type: 'heading',
        id: 'measure-and-optimize',
        text: 'Measure Quality Alongside Volume and Optimize Continuously',
      },
      {
        type: 'paragraph',
        text: 'Volume metrics like the number of leads generated tell only part of the story. To evaluate campaign effectiveness, track quality indicators including conversion rate, cost per acquisition, and downstream revenue generated per lead. These metrics reveal which campaigns, channels, and publishers are delivering real business value.',
      },
      {
        type: 'callout',
        title: 'Optimization Principle',
        content: 'Run controlled experiments when testing changes to targeting, creative, or qualification criteria. Change one variable at a time so you can isolate what is driving improvement or decline.',
      },
    ],
  },
  {
    slug: 'understanding-pay-per-call-marketing',
    title: 'Understanding Pay-Per-Call Marketing',
    category: 'Pay Per Call',
    excerpt:
      'Discover how pay-per-call marketing works, how calls are qualified, and which metrics help evaluate campaign performance.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Pay-per-call marketing phone communication',
    keyPoints: [
      'Understand how pay-per-call campaigns connect traffic with advertisers.',
      'Define a qualified call before launch to protect campaign economics.',
      'Match campaigns to audience intent with accurate messaging.',
      'Measure performance using qualified-call and downstream metrics.',
      'Improve call quality with evidence-based optimization.',
    ],
    featured: false,
    publishedAt: '2026-01-29',
    readingTime: '7 min read',
    metaTitle: 'Understanding Pay-Per-Call Marketing',
    metaDescription:
      'Discover how pay-per-call marketing works, how calls are qualified, and which metrics help evaluate campaign performance.',
    relatedSlugs: [
      'red-flags-evaluating-new-publisher',
      'building-a-stronger-lead-generation-strategy',
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Pay-per-call marketing connects advertisers with consumers who are actively seeking their products or services through phone calls. Rather than paying for impressions or clicks, advertisers pay only when a consumer places a call that meets defined qualification criteria. This performance-based model aligns advertiser spend directly with consumer intent.',
      },
      {
        type: 'heading',
        id: 'how-it-works',
        text: 'How Pay-Per-Call Campaigns Work',
      },
      {
        type: 'paragraph',
        text: 'Publishers promote advertiser offers through a variety of channels including search advertising, social media, display ads, and content marketing. When a consumer engages with an ad and places a call, the call is routed through a tracking system that attributes it to the originating publisher and campaign.',
      },
      {
        type: 'paragraph',
        text: 'Advertisers set campaign parameters that define what constitutes a qualified call. These parameters typically include minimum call duration, geographic restrictions, time-of-day requirements, and product or service category. Calls that meet these criteria are counted and billed; calls that do not meet the criteria are not.',
      },
      {
        type: 'heading',
        id: 'defining-qualified-calls',
        text: 'Defining a Qualified Call',
      },
      {
        type: 'paragraph',
        text: 'The definition of a qualified call is one of the most important decisions in a pay-per-call campaign. A definition that is too broad will result in payment for calls that do not generate business value. A definition that is too restrictive may limit the volume of calls you receive.',
      },
      {
        type: 'list',
        items: [
          'Set a minimum call duration that reflects genuine consumer engagement.',
          'Define geographic requirements that match your service area.',
          'Specify time-of-day windows when your team can handle calls effectively.',
          'Identify categories of calls that do not qualify, such as existing customers or wrong numbers.',
        ],
      },
      {
        type: 'heading',
        id: 'measuring-performance',
        text: 'Measuring Pay-Per-Call Performance',
      },
      {
        type: 'paragraph',
        text: 'Effective measurement requires tracking both call-level and downstream metrics. Call-level metrics such as total calls, qualified calls, and cost per qualified call help evaluate campaign efficiency. Downstream metrics such as conversion rate, revenue per call, and return on ad spend reveal the business value generated by the campaign.',
      },
      {
        type: 'callout',
        title: 'Performance Tip',
        content: 'Review call recordings and transcripts regularly to identify patterns in high-converting calls. Use these insights to refine targeting, improve publisher guidance, and optimize campaign messaging.',
      },
      {
        type: 'heading',
        id: 'optimization',
        text: 'Improving Call Quality Over Time',
      },
      {
        type: 'paragraph',
        text: 'Call quality improves when advertisers and publishers work together to align campaign messaging with consumer intent. Publishers who understand what makes a high-quality call for a specific campaign can optimize their traffic sources and creative to attract the right consumers. Regular communication and data sharing between advertisers and publishers accelerates this improvement.',
      },
    ],
  },
];

export function getArticleBySlug(slug) {
  return ARTICLES.find((article) => article.slug === slug) || null;
}

export function getArticleRoute(slug) {
  return ARTICLE_ROUTES[slug] || `/${slug}/`;
}

export function getArticlesByCategory(category) {
  if (category === 'All Articles') return ARTICLES;
  return ARTICLES.filter((article) => article.category === category);
}

export function getRelatedArticles(slug) {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return ARTICLES.filter((a) => article.relatedSlugs.includes(a.slug));
}
