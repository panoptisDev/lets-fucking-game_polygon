import { useCallback } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { unstakeFarm, nonBscUnstakeFarm } from 'utils/calls'
import { useMasterchef, useNonBscVault } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'
import { useOraclePrice } from 'views/Games/hooks/useFetchOraclePrice'

const useUnstakeGames = (pid: number, vaultPid?: number) => {
  const { account, chainId } = useActiveWeb3React()
  const gasPrice = useGasPrice()
  const oraclePrice = useOraclePrice(chainId)
  const masterChefContract = useMasterchef()
  const nonBscVaultContract = useNonBscVault()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(masterChefContract, pid, amount)
    },
    [masterChefContract, pid],
  )

  const handleUnstakeNonBsc = useCallback(
    async (amount: string) => {
      return nonBscUnstakeFarm(nonBscVaultContract, vaultPid, amount, gasPrice, account, oraclePrice, chainId)
    },
    [nonBscVaultContract, vaultPid, gasPrice, account, oraclePrice, chainId],
  )

  return { onUnstake: vaultPid ? handleUnstakeNonBsc : handleUnstake }
}

export default useUnstakeGames
