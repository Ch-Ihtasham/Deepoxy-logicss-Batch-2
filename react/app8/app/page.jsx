// import Image from "next/image";
"use client"
import { useCallback, useMemo, useRef, useState } from "react";
import { Navbar } from '../components/Navbar'
export default function Home() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('ali')
  // function a() {
  //   console.log('hello world')
  // }
  let a = useCallback(() => {
    console.log('hello world', name)
  }, [name])
  const btnColor = useRef(null)
  // let array = 10_000_000
  // const nums = useMemo(() => {
  //   console.log('rendering')
  //   return new Array(array).fill(0).map((_, i) => ({
  //     index: i,
  //     ismagical: i === 9_000_000
  //   }))
  // }, [array])
  // const nums = new Array(array).fill(0).map((_, i) => ({
  //   index: i,
  //   ismagical: i === 9_000_000
  // }))
  // const [number, setNumber] = useState(nums)
  // const a = useMemo(() => {
  //   console.log('renderin')
  //   return number.filter(v => v.ismagical)
  // }, [number])
  // const a = number.filter(v => v.ismagical)

  return (
    <div>
      <Navbar name={name} fun={a} />
      this is our home page
      <br />
      {/* {JSON.stringify(a)} */}
      {/* {a} */}

      <br />
      <div ref={btnColor}>name</div>

      <button className="bg-blue-500 p-2 rounded" onClick={() => {
        setCount(count + 1)
        btnColor.current.backgroundColor='red'
      }}>Click me{count}</button>
    </div>
  );
}
