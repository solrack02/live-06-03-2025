
// ---------- import Packs
import React from 'react';
import JSON5 from 'json5';
import { FlatList } from 'react-native';

// ---------- import Local Tools
import { mapElements, pathSel, getVarValue } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    elementProperties: any;
    pData: any;
    itemElements: any;
    args: any;
  };
};

// FlatList2 - ccc_flatList (newBase)
export const FlatList2 = (props: Tprops) => {
  // ------- set Caps Inputs
  const { elementProperties, pData, itemElements, args } = props.pass;

  // ---------- set Data Listener
  console.log({ itemElements });
  console.log({ elementProperties });

  let watchData = '';
  if (typeof pData === 'string') watchData = useData(ct => pathSel(ct, pData));
  // console.log({ watchData });
  // ---------- set List Item
  const renderItem = ({ item, index }: any) => (
    <>{mapElements(itemElements, { item, index })}</>
  );

  // ------- set User Element Properties (If Exists)
  let userElProps = {};

  for (const strObj of elementProperties) {
    console.log('FlatList', { strObj });
    const parsedObject = JSON5.parse(strObj);

    for (const keyProp in parsedObject) {
      const valueProp = parsedObject[keyProp];

      const [hasVar, varValue] = getVarValue(valueProp);

      if (hasVar) userElProps[keyProp] = varValue;
      if (!hasVar) userElProps[keyProp] = valueProp;
    }
  }

  const allProps = {
    data: watchData,
    renderItem,

    ...userElProps,
  };

  // console.log({ elementProperties, allProps });

  console.log({ allProps });

  // ------- set Render
  return <FlatList {...allProps} />;
};
