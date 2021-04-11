import { render } from './helper';
import { MyApp } from '../src/my-app';

describe('my-app', () => {
  it('should get className message', async () => {
    const node = (await render('<my-app></my-app>', MyApp)).firstElementChild;
    const className =  node.firstElementChild.className
    expect(className.trim()).toBe('message');
  });
});
