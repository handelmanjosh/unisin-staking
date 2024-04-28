'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { ExplorerLink } from '../cluster/cluster-ui';
import { WalletButton } from '../solana/solana-provider';
import { AppHero, ellipsify } from '../ui/ui-layout';
import { useUnisinStakingProgram } from './unisin-staking-data-access';
import { UnisinStakingCreate, UnisinStakingProgram } from './unisin-staking-ui';

export default function UnisinStakingFeature() {
  const { publicKey } = useWallet();
  const { programId } = useUnisinStakingProgram();

  return publicKey ? (
    <div>
      <AppHero
        title="UnisinStaking"
        subtitle={'Run the program by clicking the "Run program" button.'}
      >
        <p className="mb-6">
          <ExplorerLink
            path={`account/${programId}`}
            label={ellipsify(programId.toString())}
          />
        </p>
        <UnisinStakingCreate />
      </AppHero>
      <UnisinStakingProgram />
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[64px]">
        <div className="hero-content text-center">
          <WalletButton className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
}
