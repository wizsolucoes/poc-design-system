import { newSpecPage } from '@stencil/core/testing';
import { MyButton } from './button';

describe('wiz-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyButton],
      html: `<wiz-button></wiz-button>`,
    });
    expect(page.root).toEqualHtml(`
      <wiz-button>
        <mock:shadow-root>
          <button><slot></slot></button>
        </mock:shadow-root>
      </wiz-button>
    `);
  });
});
