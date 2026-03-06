-- Create attendance table
CREATE TABLE public.attendance (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  student_id TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  time TIME NOT NULL DEFAULT CURRENT_TIME,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert attendance (from the demo scanner)
CREATE POLICY "Anyone can insert attendance"
  ON public.attendance FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read attendance (for the dashboard)
CREATE POLICY "Anyone can read attendance"
  ON public.attendance FOR SELECT
  USING (true);