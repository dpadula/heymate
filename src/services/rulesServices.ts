import { supabase } from '@/lib/supabase';
import type { Rule } from '@/types/rule';

export const rulesService = {
  async getRules(): Promise<Rule[]> {
    const { data } = await supabase
      .from('rules')
      .select('*')
      .order('created_at', { ascending: false });

    return data ?? [];
  },

  async addRule(rule: Partial<Rule>) {
    return supabase.from('rules').insert(rule);
  },
};
