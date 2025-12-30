
export interface Service {
  id: string;
  name: string;
  category: 'Appliances' | 'Cooling' | 'Plumbing' | 'Electrical';
  icon: string;
  description: string;
  priceStart: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
