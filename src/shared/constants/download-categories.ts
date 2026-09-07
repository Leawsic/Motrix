import { extractExtension } from '@shared/lib/path-ext'

export type DownloadCategory =
  | 'Documents'
  | 'Compressed'
  | 'Music'
  | 'Programs'
  | 'Video'
  | 'General'

export const DOWNLOAD_CATEGORIES: readonly DownloadCategory[] = [
  'Documents',
  'Compressed',
  'Music',
  'Programs',
  'Video',
  'General',
] as const

export const CATEGORY_EXTENSIONS: Readonly<Record<Exclude<DownloadCategory, 'General'>, readonly string[]>> = {
  Documents: [
    '.pdf',
    '.doc',
    '.docx',
    '.txt',
    '.rtf',
    '.odt',
    '.xls',
    '.xlsx',
    '.ppt',
    '.pptx',
    '.odp',
    '.ods',
    '.csv',
    '.md',
    '.tex',
    '.epub',
    '.mobi',
  ],
  Compressed: [
    '.zip',
    '.rar',
    '.7z',
    '.tar',
    '.gz',
    '.bz2',
    '.xz',
    '.tgz',
    '.tbz2',
    '.txz',
    '.zst',
    '.lz4',
    '.cab',
    '.iso',
    '.img',
    '.dmg',
    '.pkg',
    '.deb',
    '.rpm',
    '.apk',
    '.xpi',
    '.crx',
    '.jar',
    '.war',
    '.ear',
  ],
  Music: [
    '.mp3',
    '.flac',
    '.wav',
    '.aac',
    '.ogg',
    '.wma',
    '.m4a',
    '.ape',
    '.opus',
    '.alac',
    '.aiff',
    '.mid',
    '.midi',
    '.amr',
  ],
  Programs: [
    '.exe',
    '.msi',
    '.app',
    '.dmg',
    '.pkg',
    '.apk',
    '.xap',
    '.appx',
    '.appxbundle',
    '.msix',
    '.msixbundle',
    '.run',
    '.bin',
    '.sh',
    '.bat',
    '.cmd',
    '.ps1',
    '.deb',
    '.rpm',
    '.snap',
    '.flatpak',
    '.appimage',
    '.com',
    '.pif',
    '.gadget',
  ],
  Video: [
    '.mp4',
    '.mkv',
    '.avi',
    '.mov',
    '.wmv',
    '.flv',
    '.webm',
    '.m4v',
    '.ts',
    '.rmvb',
    '.mpg',
    '.mpeg',
    '.m2ts',
    '.mts',
    '.vob',
    '.ogv',
    '.3gp',
    '.3g2',
    '.f4v',
    '.mkv',
  ],
}

const EXTENSION_TO_CATEGORY: ReadonlyMap<string, Exclude<DownloadCategory, 'General'>> = (() => {
  const map = new Map<string, Exclude<DownloadCategory, 'General'>>()
  for (const [category, extensions] of Object.entries(CATEGORY_EXTENSIONS)) {
    for (const ext of extensions) {
      map.set(ext.toLowerCase(), category as Exclude<DownloadCategory, 'General'>)
    }
  }
  return map
})()

export function getCategoryForFile(filePath: string): DownloadCategory {
  const ext = extractExtension(filePath).toLowerCase()
  return EXTENSION_TO_CATEGORY.get(ext) ?? 'General'
}

export function getCategoryFolderName(category: DownloadCategory): string {
  return category
}

export const DEFAULT_DOWNLOAD_CATEGORIES: Readonly<Record<DownloadCategory, string>> = {
  Documents: 'Documents',
  Compressed: 'Compressed',
  Music: 'Music',
  Programs: 'Programs',
  Video: 'Video',
  General: 'General',
}