export class StringUtils {
  public toUpperCase(value: string): string {
    return toUpperCase(value)
  }
}

export function toUpperCase(value: string): string {
  return value.toUpperCase()
}

export type stringInfo = {
  lowerCase: string,
  upperCase: string,
  characters: string[],
  length: number,
  extraInfo: object | undefined
}
export function getStringInfo(arg: string): stringInfo{
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {}
  }
}