import CardVarient0 from "./CardVarient0"
import CardVarient1 from "./CardVarient1"
import CardVarient2 from "./CardVarient2"
import CardVarient3 from "./CardVarient3"
import CardVarient4 from "./CardVarient4"

export default function Card({ varient, post, round, num }) {
   switch (varient) {
      case 0:
         return <CardVarient0 post={post} />

      case 1:
         return <CardVarient1 post={post} />

      case 2:
         return <CardVarient2 post={post} />

      case 3:
         return <CardVarient3 post={post} />

      case 4:
         return <CardVarient4 post={post} round={round || false} num={num || false} />

      default:
         return <CardVarient0 post={post} />
   }
}
