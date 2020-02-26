import React from 'react'
import { Grid, Button } from 'grommet'

export const Buttons = ({ sortWithWebWorker, sortNormally, isLoading }) => (
  <Grid
    gap='large'
    margin='large'
    columns={['1fr', '1fr']}
  >
    <Button primary label='Sort WITH web worker' disabled={isLoading} onClick={sortWithWebWorker} size='large' />
    <Button label='Sort WITHOUT web worker' disabled={isLoading} onClick={sortNormally} size='large' />
  </Grid>
)