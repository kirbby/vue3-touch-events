import {Plugin} from "vue";

declare const Vue3TouchEvents: Plugin;

export interface Vue3TouchEventsOptions {
  disableClick?: boolean;
  touchClass?: string;
  tapTolerance?: number;
  touchHoldTolerance?: number;
  swipeTolerance?: number;
  longTapTimeInterval?: number;
  dragFrequency?: number;
  rollOverFrequency?: number;
}

export default Vue3TouchEvents;