import { CssPadding, CssPaddingProps, CssPaddingSmart } from '../../meta/style';
import { isObject } from '../../utils/is-object';
import { isUndefined } from '../../utils/is-undefined';
import { processAutoPx } from '../../helpers/process-auto-px';

export function compilePadding(rawValue: CssPadding): string {
  if (Array.isArray(rawValue)) {
    return compilePaddingSmartValue(rawValue as CssPaddingSmart);
  } else if (isObject(rawValue)) {
    return compilePaddingPropsValue(rawValue);
  } else {
    return `padding:${processAutoPx(rawValue)};`;
  }
}

function compilePaddingSmartValue(rawValue: CssPaddingSmart): string {
  return `padding:${rawValue.map(processAutoPx).join(' ')};`;
}

function compilePaddingPropsValue(rawValue: CssPaddingProps): string {
  let compiled = '';
  if (!isUndefined(rawValue.bottom)) {
    compiled += `padding-bottom:${processAutoPx(rawValue.bottom)};`;
  }
  if (!isUndefined(rawValue.left)) {
    compiled += `padding-left:${processAutoPx(rawValue.left)};`;
  }
  if (!isUndefined(rawValue.top)) {
    compiled += `padding-top:${processAutoPx(rawValue.top)};`;
  }
  if (!isUndefined(rawValue.right)) {
    compiled += `padding-right:${processAutoPx(rawValue.right)};`;
  }
  return compiled;
}