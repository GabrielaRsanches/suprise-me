import { Guid } from "guid-typescript";
import { TimeInterval } from "rxjs/internal/operators/timeInterval";



export class OrderEntity {

    id: Guid
    exception: string
    deadLine: TimeInterval<Number>
}