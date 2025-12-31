-- USERS
create table users (
  id uuid primary key,
  email text unique,
  role text default 'user',
  created_at timestamp default now()
);

-- PROFILES
create table profiles (
  id uuid primary key references users(id),
  full_name text,
  phone text,
  country text default 'NG',
  created_at timestamp default now()
);

-- ACCOUNTS (FIAT LEDGER)
create table accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  currency text default 'NGN',
  balance numeric default 0,
  created_at timestamp default now()
);

-- TRANSACTIONS
create table transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  type text, -- deposit, payment, settlement
  crypto_currency text,
  crypto_amount numeric,
  fiat_currency text,
  fiat_amount numeric,
  status text default 'pending',
  created_at timestamp default now()
);
