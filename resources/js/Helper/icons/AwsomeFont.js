import { library } from '@fortawesome/fontawesome-svg-core';
import { faBoxOpen, 
  faUserCircle, 
  faUserFriends,
  faAddressCard,
  faMale,
  faFemale,
  faCheck,
  faTimes,
  faSync,
  faEdit, 
  faAngleLeft,
  faKey,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

export default {
  register() {
    library.add([
      faBoxOpen, 
      faUserCircle, 
      faUserFriends,
      faAddressCard,
      faMale,
      faFemale,
      faCheck,
      faTimes,
      faSync,
      faEdit, 
      faAngleLeft,
      faKey,
      faTag,
    ]);
  }
}
