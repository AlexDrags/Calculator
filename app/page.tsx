'use client';
import { useEffect, useState } from "react";
import { clearValue , delLostElement, totalValue, NUMS_CALC, OPERATIONS_CALC} from "./lib/foo";

export default function Home() {
  const [initValue, setIntiValue] = useState<string []>([]);
  const [total, setTotal] = useState<string>('');

  useEffect(()=> {}, [initValue,setIntiValue])

  return (
    <main className="h-full">

      <div className="h-full max-w-80 w-full ml-auto mr-auto pt-5 pb-5">
        <div style={{maxWidth: '250px', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 0 20px black'}}>

        <div className=" border-black border-2 w-full">
          <input className="w-full bg-slate-100 text-right min-h-[50px] border-black border-b-[1px]" type="text" name="" id=""  defaultValue={initValue.join('')}/>
          <input className="w-full bg-slate-100 text-right min-h-[50px]" type="text" name="" id=""  defaultValue={total} />
        </div>

        <div className="flex pt-3 pb-3 bg-slate-400 min-h-52">
          <div className="grid min-w-40 grid-cols-3 gap-2 p-1 pt-1 pb-1 ">
            {
              NUMS_CALC.map((num) => {
              return <button className="bg-slate-100 flex justify-center items-center justify-self-center self-center  w-7 h-7 p-1 rounded-full" 
              type="button" 
              onClick={
                () => {
                    setIntiValue(prev => [...prev,String(num)]);

                    if (num == '.') {
                      
                      if (initValue.length == 1 && initValue[initValue.length - 1] == '0') {
                        console.log('xyi');
                        setIntiValue(prev => [...prev.slice(0, prev.length - 1),String(num)]);
                      }

                      // if (initValue[initValue.length - 1] == '.') {
                      //   return;
                      // }

                      switch (initValue[initValue.length - 1]) {
                        case '.':
                          console.log('xyi');
                          setIntiValue(prev => [...prev.slice(0, prev.length - 1)]);
                          break;
                        case '+':
                          console.log('xyi');
                          setIntiValue(prev => [...prev.slice(0, prev.length - 1),...['0','.']]);
                          break;
                        case '-':
                          setIntiValue(prev => [...prev.slice(0, prev.length - 1),...['0','.']]);
                          break;
                        case '/':
                          setIntiValue(prev => [...prev.slice(0, prev.length - 1),...['0','.']]);
                          break;
                        case '*':
                          setIntiValue(prev => [...prev.slice(0, prev.length - 1),...['0','.']]);
                          break;
                        default:
                          break;
                      }

                      if (initValue.length === 0) {
                        setIntiValue(prev => [...['0','.']]);
                      }

                      // if (initValue.length === 1) {
                      //   setIntiValue(prev => [...prev,'.']);
                      // }

                    }

                    if (num == 'C') {
                      setIntiValue([])
                      clearValue(setIntiValue);
                    }
                }
              }
              key={num}
              value={num}>{num}</button>
              })
            }
          </div>

          <div className="flex flex-wrap gap-3 p-2 justify-center ">
            {
              OPERATIONS_CALC.map((operation) => {
                return <button className="bg-slate-100 flex justify-center items-center justify-self-center  rounded w-7 h-7 p-1"
                onClick={
                  () => {
                    if (initValue.length == 0) {
                      return;
                    }
                    switch (initValue[initValue.length - 1]) {
                      case '':
                        return;
                      case '+':
                        return;
                      case '-':
                        return;
                      case '/':
                        return;
                      case '*':
                        return;
                      default:
                        break;
                    }

                    setIntiValue(prev => [...prev,operation]);

                    if (operation == '<') {
                      delLostElement(setIntiValue,initValue);
                    }
                    
                    if (operation == '=') {
                      let finishValue = eval(initValue.join(''));

                      if(finishValue == 'Infinity' || finishValue == '-Infinity') {
                        setTotal('0');
                        setIntiValue(prev => ['0']);
                      } else {
                      totalValue(setTotal, initValue, clearValue, setIntiValue);
                      setIntiValue(prev => [`${finishValue}`]);
                      }

                      ;
                    }
                  }
                } 
                value={operation}
                type="button" key={operation}>{operation}</button>
              })
            }
          </div>

        </div>
      </div>
      </div>

    </main>
  );
}
