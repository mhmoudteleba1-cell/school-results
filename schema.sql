-- Drop existing if needed
-- DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  seat_no VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  school VARCHAR(255) NOT NULL,
  administration VARCHAR(255) NOT NULL,
  arabic NUMERIC DEFAULT 0,
  english NUMERIC DEFAULT 0,
  math NUMERIC DEFAULT 0,
  physics NUMERIC DEFAULT 0,
  chemistry NUMERIC DEFAULT 0,
  history NUMERIC DEFAULT 0,
  total NUMERIC GENERATED ALWAYS AS (arabic + english + math + physics + chemistry + history) STORED,
  percentage NUMERIC GENERATED ALWAYS AS ((arabic + english + math + physics + chemistry + history) / 380.0 * 100) STORED,
  status VARCHAR(50) DEFAULT 'ناجح',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast search
CREATE INDEX idx_students_seat_no ON students(seat_no);
CREATE INDEX idx_students_name ON students(name);
