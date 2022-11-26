import Duck from '../AbstractClass/Duck';
import FlyWithWings from '../Interface/Fly/FlyWithWings';
import IntroRealDuck from '../Interface/Introduce/IntroRealDuck';

export default class RedheadDuck extends Duck {
  kind = 'Redhead Duck';

  flyBehavior = new FlyWithWings();

  introBehavior = new IntroRealDuck();

  fly() {
    this.flyBehavior.fly();
  }

  introduce(): void {
    this.introBehavior.introduce(this.kind);
  }
}
