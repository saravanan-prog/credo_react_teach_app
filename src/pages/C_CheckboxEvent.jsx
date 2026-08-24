import { useState } from "react";

export default function C_CheckboxEvent() {

    const [choosedMenu, setChoosedMenu] = useState("all")

    return (
        <>
            <div>
                <div>
                    <input 
                        type="checkbox" 
                        value="all" 
                        checked={ choosedMenu === "all" }
                        onChange = {(e)=>setChoosedMenu(e.target.value)}
                    />
                    <label> All Menu </label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        value="veg" 
                        checked={choosedMenu === "veg" || choosedMenu === "all"}
                        onChange = {(e)=>setChoosedMenu(e.target.value)}
                    />
                    <label> Veg </label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="nonveg"
                        checked={choosedMenu === "nonveg" || choosedMenu === "all"}
                        onChange = {(e)=>setChoosedMenu(e.target.value)}
                    />
                    <label> Non veg </label>
                </div>
            </div>


            <div>
                <h2>  Menu List </h2>
                {choosedMenu == "veg" ? (
                    <div>
                        <p> Chole poori</p>
                        <p> Panner Butter Masala</p>
                    </div>
                )
                    :
                    choosedMenu == "nonveg" ? (
                        <div>
                            <p> kadai Chicken</p>
                            <p> Mutton Biriyani</p>
                        </div>
                    )
                        : (
                            <div>
                                <p> kadai Chicken</p>
                                <p> Mutton Biriyani</p>
                                <p> Chole poori</p>
                                <p> Panner Butter Masala</p>
                            </div>
                        )
                }
            </div>

        </>
    )
}
