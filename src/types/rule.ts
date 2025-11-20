export type Rule = {
  id: string;
  user_id: string;
  type: 'weather' | 'driving' | 'calendar';
  condition: string;
  action: string;
  enabled: boolean;
  created_at: string;
};
