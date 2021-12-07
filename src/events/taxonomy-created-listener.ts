import { JsMsg } from "nats";
import { Listener } from "./base-listener";
import { Streams } from "./streams";
import { Subjects } from "./subjects";
import { TaxonomyCreatedEvent } from "./taxonomy-created-event";

export class TaxonomyCreatedListener extends Listener<TaxonomyCreatedEvent> {
  stream: Streams = Streams.Post;
  subject: Subjects.TaxonomyCreated = Subjects.TaxonomyCreated;
  onMessage ( data: TaxonomyCreatedEvent[ 'data' ], msg: JsMsg ) {
    console.log( `Event Data #${ msg.seq } - `, data );
    msg.ack();
  }
}