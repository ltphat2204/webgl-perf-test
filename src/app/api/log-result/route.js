import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  const body = await req.json();

  const { type, meshCount, vertices, drawCalls, cpu, gpu, platform } = body;

  const { error } = await supabase.from('webgl_results').insert([
    {
      type,
      mesh_count: meshCount,
      vertices,
      draw_calls: drawCalls,
      cpu,
      gpu,
      platform
    }
  ]);

  if (error) {
    console.error('Lỗi khi ghi Supabase:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
