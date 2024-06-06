const TEMPLATE = `/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

`;

import { fixupPluginRules } from '@eslint/compat';
import noticePlugin from 'eslint-plugin-notice';

// TODO remove when https://github.com/nickdeis/eslint-plugin-notice/pull/21 is released
const fixupNoticePlugin = fixupPluginRules(noticePlugin);
const _noticePlugin = {
  ...fixupNoticePlugin,
  rules: {
    ...fixupNoticePlugin.rules,
    notice: {
      ...fixupNoticePlugin.rules.notice,
      meta: {
        ...fixupNoticePlugin.rules.notice.meta,
        schema: false
      }
    }
  }
};

export default {
  plugins: {
    notice: _noticePlugin
  },
  rules: {
    // throw an error when a file doesn't have a copyright notice
    'notice/notice': [
      2,
      {
        template: TEMPLATE,
        onNonMatchingHeader: 'replace'
      }
    ]
  }
};
