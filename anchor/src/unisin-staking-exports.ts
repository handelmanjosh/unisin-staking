// Here we export some useful types and functions for interacting with the Anchor program.
import { PublicKey } from '@solana/web3.js';
import type { UnisinStaking } from '../target/types/unisin_staking';
import { IDL as UnisinStakingIDL } from '../target/types/unisin_staking';

// Re-export the generated IDL and type
export { UnisinStaking, UnisinStakingIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const programId = new PublicKey(
  '7zk7rrBgXsCT7ZTz241BfZh3y8mkvLYscrh9rBmq85Yv'
);
