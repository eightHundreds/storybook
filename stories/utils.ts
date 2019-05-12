import { storiesOf as s } from "@storybook/react";
import centered from "@storybook/addon-centered";
import { withKnobs } from "@storybook/addon-knobs";

/**
 *
 * @param {*} path
 * @param {*} module
 * @param {{
 *  disableCentered:boolean,
 *  useKnobs:boolean,
 * }} option
 */
export function storiesOf(
  path: string,
  module: any,
  option: {
    disableCentered?: boolean;
    useKnobs?: boolean;
  } = {}
) {
  //   const newPath = path.substring(path.indexOf('/', 1))

  const result = s(path, module);
  if (!option.disableCentered) {
    result.addDecorator(centered);
  }
  if (option.useKnobs) {
    result.addDecorator(withKnobs);
  }
  return result;
}
export default null;
