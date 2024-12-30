import { ThemeDefinition } from "plugins-shared";

export const draculaTheme: ThemeDefinition = {
  // Page
  pageBackground: '#282a36', // Dark background
  pageBackgroundModalActive: '#44475a', // Slightly lighter modal background
  pageBackgroundTopLeft: '#44475a',
  pageBackgroundBottomRight: '#6272a4', // Muted blue for a gradient
  pageBackgroundLineTop: '#bd93f9', // Purple
  pageBackgroundLineMid: '#6272a4', // Muted blue
  pageBackgroundLineBottom: '#ff79c6', // Pink
  pageText: '#f8f8f2', // Light text
  pageTextLight: '#bd93f9', // Purple for lighter tone
  pageTextSubdued: '#6272a4', // Comments
  pageTextDark: '#ff79c6', // Pink for emphasis
  pageTextPositive: '#50fa7b', // Green for positivity
  pageTextLink: '#8be9fd', // Cyan for links
  pageTextLinkLight: '#50fa7b', // Light green for hover links

  // Card
  cardBackground: '#44475a', // Current line background
  cardBorder: '#bd93f9', // Purple border
  cardShadow: 'rgba(0, 0, 0, 0.5)', // Slight shadow

  // Table
  tableBackground: '#282a36',
  tableRowBackgroundHover: '#44475a',
  tableRowBackgroundHighlight: '#ff79c6', // Pink highlight
  tableRowBackgroundHighlightText: '#282a36',
  tableText: '#f8f8f2',
  tableTextLight: '#bd93f9',
  tableTextSubdued: '#6272a4',
  tableTextSelected: '#50fa7b', // Green selection
  tableTextHover: '#ff79c6',
  tableTextInactive: '#6272a4',
  tableHeaderText: '#8be9fd', // Cyan header text
  tableHeaderBackground: '#44475a',
  tableBorder: '#6272a4',
  tableBorderSelected: '#bd93f9',
  tableBorderHover: '#50fa7b',
  tableBorderSeparator: '#44475a',

  // Sidebar
  sidebarBackground: '#282a36',
  sidebarItemBackgroundPending: '#ffb86c', // Orange pending
  sidebarItemBackgroundPositive: '#50fa7b', // Green for success
  sidebarItemBackgroundFailed: '#ff5555', // Red for failure
  sidebarItemBackgroundHover: '#44475a',
  sidebarItemAccentSelected: '#ff79c6',
  sidebarItemText: '#f8f8f2',
  sidebarItemTextSelected: '#ff79c6',

  // Menu
  menuBackground: '#44475a',
  menuItemBackground: '#282a36',
  menuItemBackgroundHover: '#6272a4',
  menuItemText: '#f8f8f2',
  menuItemTextHover: '#ff79c6',
  menuItemTextSelected: '#50fa7b',
  menuItemTextHeader: '#bd93f9',
  menuBorder: '#6272a4',
  menuBorderHover: '#ff79c6',
  menuKeybindingText: '#8be9fd', // Cyan for keybindings
  menuAutoCompleteBackground: '#282a36',
  menuAutoCompleteBackgroundHover: '#44475a',
  menuAutoCompleteText: '#f8f8f2',
  menuAutoCompleteTextHover: '#50fa7b',
  menuAutoCompleteTextHeader: '#ffb86c',
  menuAutoCompleteItemTextHover: '#ff79c6',
  menuAutoCompleteItemText: '#f8f8f2',

  // Modal
  modalBackground: '#44475a',
  modalBorder: '#6272a4',

  // Mobile
  mobileHeaderBackground: '#44475a',
  mobileHeaderText: '#ff79c6',
  mobileHeaderTextSubdued: '#6272a4',
  mobileHeaderTextHover: 'rgba(255, 121, 198, 0.15)',
  mobilePageBackground: '#282a36',
  mobileNavBackground: '#44475a',
  mobileNavItem: '#6272a4',
  mobileNavItemSelected: '#ff79c6',
  mobileAccountShadow: 'rgba(0, 0, 0, 0.6)',
  mobileAccountText: '#8be9fd',
  mobileTransactionSelected: '#50fa7b',

  // Mobile Themes
  mobileViewTheme: '#44475a',
  mobileConfigServerViewTheme: '#ff79c6',

  // Markdown
  markdownNormal: '#ff79c6',
  markdownDark: '#bd93f9',
  markdownLight: '#50fa7b',

  // Buttons
  buttonMenuText: '#f8f8f2',
  buttonMenuTextHover: '#ff79c6',
  buttonMenuBackground: 'transparent',
  buttonMenuBackgroundHover: 'rgba(255, 121, 198, 0.2)',
  buttonMenuBorder: '#bd93f9',
  buttonMenuSelectedText: '#282a36',
  buttonMenuSelectedTextHover: '#282a36',
  buttonMenuSelectedBackground: '#50fa7b',
  buttonMenuSelectedBackgroundHover: '#6272a4',
  buttonMenuSelectedBorder: '#50fa7b',

  buttonPrimaryText: '#282a36',
  buttonPrimaryTextHover: '#282a36',
  buttonPrimaryBackground: '#50fa7b',
  buttonPrimaryBackgroundHover: '#8be9fd',
  buttonPrimaryBorder: '#50fa7b',
  buttonPrimaryShadow: 'rgba(0, 0, 0, 0.6)',
  buttonPrimaryDisabledText: '#6272a4',
  buttonPrimaryDisabledBackground: '#44475a',
  buttonPrimaryDisabledBorder: '#6272a4',

  buttonNormalText: '#f8f8f2',
  buttonNormalTextHover: '#ff79c6',
  buttonNormalBackground: '#44475a',
  buttonNormalBackgroundHover: '#6272a4',
  buttonNormalBorder: '#6272a4',
  buttonNormalShadow: 'rgba(0, 0, 0, 0.3)',
  buttonNormalDisabledText: '#6272a4',
  buttonNormalDisabledBackground: '#282a36',
  buttonNormalDisabledBorder: '#6272a4',

  buttonBareText: '#f8f8f2',
  buttonBareTextHover: '#ff79c6',
  buttonBareBackground: 'transparent',
  buttonBareBackgroundHover: 'rgba(255, 121, 198, 0.2)',
  buttonBareBackgroundActive: 'rgba(255, 121, 198, 0.3)',
  buttonBareDisabledText: '#6272a4',
  buttonBareDisabledBackground: 'transparent',

  // Calendar
  calendarText: '#f8f8f2',
  calendarBackground: '#282a36',
  calendarItemText: '#f8f8f2',
  calendarItemBackground: '#44475a',
  calendarSelectedBackground: '#bd93f9',

  // Notices
  noticeBackground: '#50fa7b',
  noticeText: '#282a36',
  noticeBorder: '#6272a4',
  warningBackground: '#ffb86c',
  warningText: '#282a36',
  warningBorder: '#bd93f9',
  errorBackground: '#ff5555',
  errorText: '#282a36',
  errorBorder: '#ff79c6',
  upcomingBackground: '#bd93f9',
  upcomingText: '#282a36',
  upcomingBorder: '#ff79c6',

  // Form
  formLabelText: '#8be9fd',
  formLabelBackground: '#44475a',
  formInputBackground: '#44475a',
  formInputBackgroundSelected: '#6272a4',
  formInputBackgroundSelection: '#50fa7b',
  formInputBorder: '#bd93f9',
  formInputText: '#f8f8f2',
  formInputTextSelected: '#50fa7b',
  formInputTextPlaceholder: '#6272a4',
  formInputTextHighlight: '#ff79c6',
  formInputShadowSelected: 'rgba(189, 147, 249, 0.5)',

  // Miscellaneous
  pillBackground: '#44475a',
  pillBackgroundLight: '#6272a4',
  pillText: '#f8f8f2',
  pillTextHighlighted: '#ff79c6',
  pillBorder: '#bd93f9',
  pillBackgroundSelected: '#50fa7b',
  pillTextSelected: '#282a36',
  pillBorderSelected: '#50fa7b',
  pillTextSubdued: '#6272a4',

  reportsRed: '#ff5555',
  reportsBlue: '#8be9fd',
  reportsGreen: '#50fa7b',
  reportsGray: '#6272a4',
  reportsLabel: '#f8f8f2',
  reportsInnerLabel: '#bd93f9',

  noteTagBackground: '#44475a',
  noteTagBackgroundHover: '#6272a4',
  noteTagText: '#8be9fd',

  floatingActionBarBackground: '#44475a',
  floatingActionBarBorder: '#bd93f9',
  floatingActionBarText: '#f8f8f2',

  tooltipText: '#f8f8f2',
  tooltipBackground: '#44475a',
  tooltipBorder: '#bd93f9',
};
