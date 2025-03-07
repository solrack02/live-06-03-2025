

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'sc1';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc1",

          styles:['{ backgroundColor: "red", alignItems: "center", justifyContent: "center", flex: 1 }'],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{ disabled: "$var_all.cond1", onHoverIn: "$var_all.func1", children: "$var_all.Comp1" }'],

            styles:['{ backgroundColor: "$var_all.colors.primary", width: 120, height: 40, marginTop: 60, alignItems: "center", justifyContent: "center" }'],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("sc2");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            'Ir p/ Tela 2'
          ],

          args,

        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: 'all.lists.lt1',

          itemElements: [
            (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>
          ],

      styles:['{ flex: 1, backgroundColor: "yellow", width: "100%", height: 60 }'],    args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc2",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[() => {
                  const textStyle = {
                    fontSize: 20,
                    color: '#fff2',
                    textAlign:'center',
                    maxWidth: 200,
                    // maxWidth: '200px'<= #ATTENTION: Native ERROR! No string!
                  };

                  return (
                    <RN.Text style={textStyle}>
                      {'Adicione Elementos nessa tela!'}
                    </RN.Text>);
                }],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#fff", 'secondary': "red" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}] } 
, 'name': "Name:" } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
