import { Infinity, Zap, Crown, Wallet, Figma, Github, Slack, Dribbble, Framer } from 'lucide-react';

export const TRUSTED_BRANDS = [
    { Icon: Figma, label: 'Figma' },
    { Icon: Github, label: 'GitHub' },
    { Icon: Slack, label: 'Slack' },
    { Icon: Dribbble, label: 'Dribbble' },
    { Icon: Framer, label: 'Framer' },
] as const;

export const FEATURES = [
    {
        Icon: Infinity,
        title: 'Unlimited Requests',
        desc: "Add as many design requests to your queue as you'd like. We'll handle them one by one."
    },
    {
        Icon: Zap,
        title: 'Rapid Delivery',
        desc: 'Get your design within two to three business days on average. Quality without the wait.'
    },
    {
        Icon: Crown,
        title: 'Elite Quality',
        desc: 'Direct access to world-class senior designers. No juniors, no outsourcing, no compromises.'
    },
    {
        Icon: Wallet,
        title: 'Fixed Pricing',
        desc: 'No surprises. Pay the same flat monthly price every month. Cancel or pause anytime.'
    },
] as const;

export const PRICING_PLANS = [
    {
        id: 'standard',
        name: 'Standard',
        desc: 'One request at a time.',
        price: '4,995',
        features: [
            'One request at a time',
            'Average 48 hour delivery',
            'Unlimited brands',
            'Unlimited users',
            'Pause or cancel anytime',
        ],
        buttonText: 'Get Started',
        featured: false,
    },
    {
        id: 'pro',
        name: 'Pro',
        desc: 'Two requests at a time.',
        price: '7,995',
        features: [
            'Double the output',
            'Priority support channel',
            'Average 48 hour delivery',
            'Dedicated art director',
            'Pause or cancel anytime',
        ],
        buttonText: 'Get Started',
        featured: true,
        badge: 'Most Popular',
    }
];

export const FAQS = [
    {
        question: "Why wouldn't I just hire a full-time designer?",
        answer: "The annual cost of a full-time senior-level designer now exceeds $160,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With our monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
    },
    {
        question: "How many requests can I have?",
        answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
    },
    {
        question: "How fast will I receive my designs?",
        answer: "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
    },
    {
        question: "What programs do you design in?",
        answer: "Most design requests are completed using Figma. Adobe Creative Suite is used for complex assets and editorial work.",
    }
];

export const SERVICES_STEPS = [
    {
        number: '01',
        title: 'Subscribe & Brief',
        desc: 'Choose a plan that fits your scale. Gain access to your dedicated Trello board where you can queue unlimited requests.',
    },
    {
        number: '02',
        title: 'We Design',
        desc: "Our senior team works through your queue. You'll receive high-fidelity designs every few business days until you're 100% satisfied.",
    },
    {
        number: '03',
        title: 'Iterate & Launch',
        desc: "Provide feedback directly in the board. We refine until it's perfect. Launch with confidence and start your next task immediately.",
    },
];

export const NAV_LINKS = [
    { href: '#work', label: 'Our Work' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
];
