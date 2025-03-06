
// ---------- import Local Tools
import { getVarValue } from './getVarValue';
import { useRoutes } from '../../..';

// ---------- set GoTo Router (with All Screens Access)
export const goTo = (newRoute: string) => {
  console.log('GOTO', newRoute);
  const [condVar, varValue] = getVarValue(newRoute, 'noComponent');
  console.log('GOTO', varValue);
  if (condVar) useRoutes.setState({ currRoute: varValue });

  // ---------- get Function from A_Project Scope
  if (!condVar) useRoutes.setState({ currRoute: newRoute });
};
