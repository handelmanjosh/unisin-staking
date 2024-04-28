use anchor_lang::prelude::*;

declare_id!("7zk7rrBgXsCT7ZTz241BfZh3y8mkvLYscrh9rBmq85Yv");

#[program]
pub mod unisin_staking {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
