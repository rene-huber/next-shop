"use client"

import Loader from "@/components/Loader";
import WorkList from "@/components/WorkList";
import "@/styles/Wishlist.scss";
import { useSession } from "next-auth/react";

const Wishlist = () => {
  const { data: session } = useSession();
  const wishlist = session?.user?.wishlist;

  console.log(wishlist)

  return !session ? <Loader /> :(
    <div className="bajar">
    

      <h1 className="title-list">
        Your Wishlist
      </h1>

      <WorkList data={wishlist} />
    </div>
  )
}

export default Wishlist