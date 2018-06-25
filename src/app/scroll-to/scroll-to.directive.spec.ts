import { ScrollToDirective } from './scroll-to.directive';
import { ScrollToService } from './scroll-to.service';

describe('ScrollToDirective', () => {
  it('should create an instance', () => {
    const directive = new ScrollToDirective(new ScrollToService());
    expect(directive).toBeTruthy();
  });
});
