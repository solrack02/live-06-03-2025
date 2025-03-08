
// ---------- import Packs
import { getCtData } from '../';
import { doc } from 'firebase/firestore';
import { getFirestore, getDocs, onSnapshot } from '@firebase/firestore';

type Tprops = {
  args: any;
  pass: { arrRefStrings: string[]; arrFuncs: any[] };
};

export const getDocTool = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { arrRefStrings, arrFuncs } = pass;

  // ---------- set Local Imports

  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  const fbInit = getCtData('all.temp.fbInit');
  console.log({ fbInit });
  console.log({ arrRefStrings });
  const fireInit = getFirestore(fbInit[0]);
  const refColl = doc(fireInit, ...arrRefStrings);

  const unsub = onSnapshot(refColl, success => {
    let Doc = {};
    console.log({ success });
    if (success) Doc = success.data();

    // ---------- set Get Value Functions
    console.log({ Doc });

    for (const currFunc of arrFuncs) currFunc(args, Doc);
  });
};
