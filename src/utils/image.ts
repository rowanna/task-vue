// utils/image.ts
// useProgressiveImage 훅에서 사용하는 점진적 이미지 로딩 유틸리티.
// This file is intentionally implemented so that candidates can focus on the hook implementation (TODO 09).

export type ProgressiveQuality = 'small' | 'large'
export type ProgressiveResult = { url: string; quality: ProgressiveQuality }

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (e) => reject(e)
    img.src = url
  })
}

export function image(smallUrl: string, largeUrl: string) {
  const small = loadImage(smallUrl).then(() => ({ url: smallUrl, quality: 'small' as const }))
  const large = loadImage(largeUrl).then(() => ({ url: largeUrl, quality: 'large' as const }))
  return { small, large }
}
