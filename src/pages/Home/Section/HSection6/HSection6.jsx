import { Customheader } from "../../../../component/CustomHeader/Customheader";
import FaqAccordion from "../../../../component/FAQAccordion/FaqAccordion";

export default function HSection6 () {
    return(
        <div>
            <div>
                <Customheader data={"FAQ"}></Customheader>
            </div>
            <div>
                <div>para</div>
                <div>
                    <FaqAccordion></FaqAccordion>
                </div>
            </div>
        </div>
    )
}