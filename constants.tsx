
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ac-repair',
    name: 'AC Master Service',
    category: 'Cooling',
    icon: '❄️',
    description: 'Deep jet cleaning & expert gas charging for peak performance.',
    priceStart: 499
  },
  {
    id: 'fridge-repair',
    name: 'Refrigerator Restore',
    category: 'Appliances',
    icon: '🧊',
    description: 'Expert fixing for single/double door and side-by-side units.',
    priceStart: 299
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Care',
    category: 'Appliances',
    icon: '🧺',
    description: 'Specialized technicians for front and top load automation.',
    priceStart: 349
  },
  {
    id: 'plumbing-expert',
    name: 'Essential Plumbing',
    category: 'Plumbing',
    icon: '🚰',
    description: 'Leak detection, fixture installation, and drainage solutions.',
    priceStart: 199
  },
  {
    id: 'electrical-safety',
    name: 'Safe Electricals',
    category: 'Electrical',
    icon: '⚡',
    description: 'Circuit checking, smart home setup, and panel repairs.',
    priceStart: 149
  },
  {
    id: 'microwave-fix',
    name: 'Microwave Rescue',
    category: 'Appliances',
    icon: '🥘',
    description: 'Component-level repair for convection and solo ovens.',
    priceStart: 249
  }
];

export const BRAND_MISSION = {
  title: "The Heart of DoorStep Essentials",
  story: "Founded in the bustling streets of Gurugram, we saw a crisis of trust in home repairs. Generic platforms offered everything but mastered nothing. Your home's lifelines—its electricity, water, and cooling—deserve more than a 'generalist'. We founded DoorStep Essentials with a singular, stubborn focus: to be the absolute masters of the systems that keep your family comfortable.",
  values: [
    { title: "Uncompromising Expertise", description: "Our pros are not jacks-of-all-trades; they are certified masters of specific home systems." },
    { title: "Radical Transparency", description: "Clear pricing, no visit fees, and a paper trail for every screw turned." },
    { title: "The Trust Layer", description: "Every technician is background-verified through a 3rd party police record check." }
  ]
};

export const REFUND_POLICY_TEXT = `
# Our Gold Standard Guarantee

At **DoorStep Essentials**, we don't just fix things; we provide peace of mind. Our standards are the highest in the industry, and we stand by them.

### 1. The 30-Day Happiness Guarantee
Every service is backed by a 30-day warranty. If the specific technical issue we repaired recurs within 30 days, we will dispatch a senior technician to rectify it at zero cost to you.

### 2. The Clean-Home Promise
Our technicians are trained to leave your home as clean as they found it. If they leave a mess, your next service visit is on us.

### 3. Transparent Fixed Pricing
- **Standard Quotes:** You will receive a digital quote before work begins.
- **No Hidden Fees:** If a technician requests payment outside the digital invoice, the service is free and the technician is penalized.

### 4. Refund & Re-Service Conditions
- **Partial Refund:** If a component fails within the warranty period and cannot be repaired.
- **Full Refund:** If the technician is unable to diagnose the issue or if the service standard is deemed 'Sub-par' by our audit team.
- **Cancellations:** Full refund for cancellations made 120 minutes before the scheduled slot.

### 5. Issue Resolution
We aim to resolve all grievances within 24 hours.
**Escalation Contact:** support-trust@doorstepessentials.com | Toll Free: 1800-419-544
`;
