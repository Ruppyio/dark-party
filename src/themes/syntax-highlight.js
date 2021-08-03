'use strict';

const { text } = require('./colors');

/** @type {import('../declaration').TokenColor[]} */
const syntaxHighlight = [
  {
    name: 'unison punctuation',
    scope:
      'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'haskell variable generic-type',
    scope: 'variable.other.generic-type.haskell',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'haskell storage type',
    scope: 'storage.type.haskell',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'support.variable.magic.python',
    scope: 'support.variable.magic.python',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'punctuation.separator.parameters.python',
    scope:
      'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'variable.parameter.function.language.special.self.python',
    scope: 'variable.parameter.function.language.special.self.python',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'storage.modifier.lifetime.rust',
    scope: 'storage.modifier.lifetime.rust',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'support.function.std.rust',
    scope: 'support.function.std.rust',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'entity.name.lifetime.rust',
    scope: 'entity.name.lifetime.rust',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'variable.language.rust',
    scope: 'variable.language.rust',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'support.constant.edge',
    scope: 'support.constant.edge',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'regexp constant character-class',
    scope: 'constant.other.character-class.regexp',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'regexp operator.quantifier',
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'punctuation.definition',
    scope:
      'punctuation.definition.string.begin,punctuation.definition.string.end',
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'Text',
    scope: 'variable.parameter.function',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Comment Markup Link',
    scope: 'comment markup.link',
    settings: {
      foreground: text.dark,
    },
  },
  {
    name: 'markup diff',
    scope: 'markup.changed.diff',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'diff',
    scope:
      'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'inserted.diff',
    scope: 'markup.inserted.diff',
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'deleted.diff',
    scope: 'markup.deleted.diff',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'c++ function',
    scope: 'meta.function.c,meta.function.cpp',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'c++ block',
    scope:
      'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'js/ts punctuation separator key-value',
    scope: 'punctuation.separator.key-value',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'js/ts import keyword',
    scope: 'keyword.operator.expression.import',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'math js/ts',
    scope: 'support.constant.math',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'math property js/ts',
    scope: 'support.constant.property.math',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'js/ts variable.other.constant',
    scope: 'variable.other.constant',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'java type',
    scope: ['storage.type.annotation.java', 'storage.type.object.array.java'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'java source',
    scope: 'source.java',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'java modifier.import',
    scope:
      'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'java modifier.import',
    scope: 'meta.method.java',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'java modifier.import',
    scope:
      'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'java instanceof',
    scope: 'keyword.operator.instanceof.java',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'java variable.name',
    scope: 'meta.definition.variable.name.java',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'operator logical',
    scope: 'keyword.operator.logical',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'operator bitwise',
    scope: 'keyword.operator.bitwise',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'operator channel',
    scope: 'keyword.operator.channel',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'support.constant.property-value.scss',
    scope:
      'support.constant.property-value.scss,support.constant.property-value.css',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'CSS/SCSS/LESS Operators',
    scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'css color standard name',
    scope:
      'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'css comma',
    scope: 'punctuation.separator.list.comma.css',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'css attribute-name.id',
    scope: 'support.constant.color.w3c-standard-color-name.css',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'css property-name',
    scope: 'support.type.vendored.property-name.css',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'js/ts module',
    scope: 'support.module.node,support.type.object.module,support.module.node',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'entity.name.type.module',
    scope: 'entity.name.type.module',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'js variable readwrite',
    scope:
      'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'js/ts json',
    scope: 'support.constant.json',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'js/ts Keyword',
    scope: [
      'keyword.operator.expression.instanceof',
      'keyword.operator.new',
      'keyword.operator.ternary',
      'keyword.operator.optional',
      'keyword.operator.expression.keyof',
    ],
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'js/ts console',
    scope: 'support.type.object.console',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'js/ts support.variable.property.process',
    scope: 'support.variable.property.process',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'js console function',
    scope: 'entity.name.function,support.function.console',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'keyword.operator.misc.rust',
    scope: 'keyword.operator.misc.rust',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'keyword.operator.sigil.rust',
    scope: 'keyword.operator.sigil.rust',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'operator',
    scope: 'keyword.operator.delete',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'js dom',
    scope: 'support.type.object.dom',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'js dom variable',
    scope: 'support.variable.dom,support.variable.property.dom',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'keyword.operator',
    scope:
      'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'C operator assignment',
    scope:
      'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Punctuation',
    scope: 'punctuation.separator.delimiter',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Other punctuation .c',
    scope: 'punctuation.separator.c,punctuation.separator.cpp',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'C type posix-reserved',
    scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'keyword.operator.sizeof.c',
    scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'python parameter',
    scope: 'variable.parameter.function.language.python',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'python type',
    scope: 'support.type.python',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'python logical',
    scope: 'keyword.operator.logical.python',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'pyCs',
    scope: 'variable.parameter.function.python',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'python block',
    scope:
      'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'python function-call.generic',
    scope: 'meta.function-call.generic.python',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'python placeholder reset to normal string',
    scope: 'constant.character.format.placeholder.other.python',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'Operators',
    scope: 'keyword.operator',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Compound Assignment Operators',
    scope: 'keyword.operator.assignment.compound',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Compound Assignment Operators js/ts',
    scope:
      'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'Keywords',
    scope: 'keyword',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Namespaces',
    scope: 'entity.name.namespace',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Variables',
    scope: 'variable',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Variables',
    scope: 'variable.c',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Language variables',
    scope: 'variable.language',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Java Variables',
    scope: 'token.variable.parameter.java',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Java Imports',
    scope: 'import.storage.java',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Packages',
    scope: 'token.package.keyword',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Packages',
    scope: 'token.package',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Functions',
    scope: [
      'entity.name.function',
      'meta.require',
      'support.function.any-method',
      'variable.function',
    ],
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'Classes',
    scope: 'entity.name.type.namespace',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Classes',
    scope: 'support.class, entity.name.type.class',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Class name',
    scope: 'entity.name.class.identifier.namespace.type',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Class name',
    scope: [
      'entity.name.class',
      'variable.other.class.js',
      'variable.other.class.ts',
    ],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Class name php',
    scope: 'variable.other.class.php',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Type Name',
    scope: 'entity.name.type',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Keyword Control',
    scope: 'keyword.control',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Control Elements',
    scope: 'control.elements, keyword.operator.less',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'Methods',
    scope: 'keyword.other.special-method',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'Storage',
    scope: 'storage',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Storage JS TS',
    scope: 'token.storage',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
    scope:
      'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Java Storage',
    scope: 'token.storage.type.java',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Support',
    scope: 'support.function',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'Support type',
    scope: 'support.type.property-name',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Support type',
    scope: 'support.constant.property-value',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Support type',
    scope: 'support.constant.font-name',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'Meta tag',
    scope: 'meta.tag',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Strings',
    scope: 'string',
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'Inherited Class',
    scope: 'entity.other.inherited-class',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Constant other symbol',
    scope: 'constant.other.symbol',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'Integers',
    scope: 'constant.numeric',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'Constants',
    scope: 'constant',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'Constants',
    scope: 'punctuation.definition.constant',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'Tags',
    scope: 'entity.name.tag',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Attributes',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'Attribute IDs',
    scope: 'entity.other.attribute-name.id',
    settings: {
      fontStyle: 'normal',
      foreground: text.malibu,
    },
  },
  {
    name: 'Attribute class',
    scope: 'entity.other.attribute-name.class.css',
    settings: {
      fontStyle: 'normal',
      foreground: text.whiskey,
    },
  },
  {
    name: 'Selector',
    scope: 'meta.selector',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Headings',
    scope: 'markup.heading',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Headings',
    scope: 'markup.heading punctuation.definition.heading, entity.name.section',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'Units',
    scope: 'keyword.other.unit',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Bold',
    scope: 'markup.bold,todo.bold',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'Bold',
    scope: 'punctuation.definition.bold',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'markup Italic',
    scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'emphasis md',
    scope: 'emphasis md',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown headings',
    scope: 'entity.name.section.markdown',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
    scope: 'punctuation.definition.heading.markdown',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'punctuation.definition.list.begin.markdown',
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown heading setext',
    scope: 'markup.heading.setext',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
    scope: 'punctuation.definition.bold.markdown',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Inline Raw',
    scope: 'markup.inline.raw.markdown',
    settings: {
      foreground: text.green,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Inline Raw',
    scope: 'markup.inline.raw.string.markdown',
    settings: {
      foreground: text.green,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
    scope: 'punctuation.definition.list.markdown',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
    scope: [
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'punctuation.definition.metadata.markdown',
    ],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'beginning.punctuation.definition.list.markdown',
    scope: ['beginning.punctuation.definition.list.markdown'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
    scope: 'punctuation.definition.metadata.markdown',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
    scope:
      'markup.underline.link.markdown,markup.underline.link.image.markdown',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
    scope:
      'string.other.link.title.markdown,string.other.link.description.markdown',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'Regular Expressions',
    scope: 'string.regexp',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'Escape Characters',
    scope: 'constant.character.escape',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'Embedded',
    scope: 'punctuation.section.embedded, variable.interpolation',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Embedded',
    scope:
      'punctuation.section.embedded.begin,punctuation.section.embedded.end',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'illegal',
    scope: 'invalid.illegal',
    settings: {
      foreground: text.invalid,
    },
  },
  {
    name: 'illegal',
    scope: 'invalid.illegal.bad-ampersand.html',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Broken',
    scope: 'invalid.broken',
    settings: {
      foreground: text.invalid,
    },
  },
  {
    name: 'Deprecated',
    scope: 'invalid.deprecated',
    settings: {
      foreground: text.invalid,
    },
  },
  {
    name: 'Unimplemented',
    scope: 'invalid.unimplemented',
    settings: {
      foreground: text.invalid,
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
    scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
    scope:
      'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
    scope:
      'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
    scope:
      'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: '[VSCODE-CUSTOM] JSON Property Name',
    scope: 'support.type.property-name.json',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
    scope: 'support.type.property-name.json punctuation',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'laravel blade tag',
    scope:
      'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'laravel blade @',
    scope:
      'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'use statement for other classes',
    scope:
      'support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'error suppression',
    scope: 'keyword.operator.error-control.php',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'php instanceof',
    scope: 'keyword.operator.type.php',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'style double quoted array index normal begin',
    scope: 'punctuation.section.array.begin.php',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'style double quoted array index normal end',
    scope: 'punctuation.section.array.end.php',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'php illegal.non-null-typehinted',
    scope: 'invalid.illegal.non-null-typehinted.php',
    settings: {
      foreground: text.error,
    },
  },
  {
    name: 'php types',
    scope:
      'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'php call-function',
    scope:
      'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'php function-resets',
    scope:
      'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'support php constants',
    scope: 'support.constant.core.rust',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'support php constants',
    scope:
      'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'php goto',
    scope: 'entity.name.goto-label.php,support.other.php',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'php logical/bitwise operator',
    scope:
      'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'php regexp operator',
    scope: 'keyword.operator.regexp.php',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'php comparison',
    scope: 'keyword.operator.comparison.php',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'php heredoc/nowdoc',
    scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'python function decorator @',
    scope: 'meta.function.decorator.python',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'python function support',
    scope:
      'support.token.decorator.python,meta.function.decorator.identifier.python',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'parameter function js/ts',
    scope: 'function.parameter',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'brace function',
    scope: 'function.brace',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'parameter function ruby cs',
    scope: 'function.parameter.ruby, function.parameter.cs',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'constant.language.symbol.ruby',
    scope: 'constant.language.symbol.ruby',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'rgb-value',
    scope: 'rgb-value',
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'rgb value',
    scope: 'inline-color-decoration rgb-value',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'rgb value less',
    scope: 'less rgb-value',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'sass selector',
    scope: 'selector.sass',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'ts primitive/builtin types',
    scope:
      'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'block scope',
    scope: 'block.scope.end,block.scope.begin',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'cs storage type',
    scope: 'storage.type.cs',
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'cs local variable',
    scope: 'entity.name.variable.local.cs',
    settings: {
      foreground: text.coral,
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: text.malibu,
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: text.error,
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'String interpolation',
    scope: [
      'punctuation.definition.template-expression.begin',
      'punctuation.definition.template-expression.end',
      'punctuation.section.embedded',
    ],
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Reset JavaScript string interpolation expression',
    scope: ['meta.template.expression'],
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Import module JS',
    scope: ['keyword.operator.module'],
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'js Flowtype',
    scope: ['support.type.type.flowtype'],
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'js Flow',
    scope: ['support.type.primitive'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'js class prop',
    scope: ['meta.property.object'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'js func parameter',
    scope: ['variable.parameter.function.js'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'js template literals begin',
    scope: ['keyword.other.template.begin'],
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'js template literals end',
    scope: ['keyword.other.template.end'],
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'js template literals variable braces begin',
    scope: ['keyword.other.substitution.begin'],
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'js template literals variable braces end',
    scope: ['keyword.other.substitution.end'],
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'js operator.assignment',
    scope: ['keyword.operator.assignment'],
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'go operator',
    scope: ['keyword.operator.assignment.go'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'go operator',
    scope: ['keyword.operator.arithmetic.go', 'keyword.operator.address.go'],
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'Go package name',
    scope: ['entity.name.package.go'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'elm prelude',
    scope: ['support.type.prelude.elm'],
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'elm constant',
    scope: ['support.constant.elm'],
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: 'template literal',
    scope: ['punctuation.quasi.element'],
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'html/pug (jade) escaped characters and entities',
    scope: ['constant.character.entity'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
    scope: [
      'entity.other.attribute-name.pseudo-element',
      'entity.other.attribute-name.pseudo-class',
    ],
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'Clojure globals',
    scope: ['entity.global.clojure'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Clojure symbols',
    scope: ['meta.symbol.clojure'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Clojure constants',
    scope: ['constant.keyword.clojure'],
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'CoffeeScript Function Argument',
    scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Ini Default Text',
    scope: ['source.ini'],
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'Makefile prerequisities',
    scope: ['meta.scope.prerequisites.makefile'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Makefile text colour',
    scope: ['source.makefile'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Groovy import names',
    scope: ['storage.modifier.import.groovy'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Groovy Methods',
    scope: ['meta.method.groovy'],
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'Groovy Variables',
    scope: ['meta.definition.variable.name.groovy'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Groovy Inheritance',
    scope: ['meta.definition.class.inherited.classes.groovy'],
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'HLSL Semantic',
    scope: ['support.variable.semantic.hlsl'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'HLSL Types',
    scope: [
      'support.type.texture.hlsl',
      'support.type.sampler.hlsl',
      'support.type.object.hlsl',
      'support.type.object.rw.hlsl',
      'support.type.fx.hlsl',
      'support.type.object.hlsl',
    ],
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'SQL Variables',
    scope: ['text.variable', 'text.bracketed'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'types',
    scope: ['support.type.swift', 'support.type.vb.asp'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'heading 1, keyword',
    scope: ['entity.name.function.xi'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'heading 2, callable',
    scope: ['entity.name.class.xi'],
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'heading 3, property',
    scope: ['constant.character.character-class.regexp.xi'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'heading 4, type, class, interface',
    scope: ['constant.regexp.xi'],
    settings: {
      foreground: text.purple,
    },
  },
  {
    name: 'heading 5, enums, preprocessor, constant, decorator',
    scope: ['keyword.control.xi'],
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    name: 'heading 6, number',
    scope: ['invalid.xi'],
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'string',
    scope: ['beginning.punctuation.definition.quote.markdown.xi'],
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'comments',
    scope: ['beginning.punctuation.definition.list.markdown.xi'],
    settings: {
      foreground: text.lightDark,
    },
  },
  {
    name: 'link',
    scope: ['constant.character.xi'],
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'accent',
    scope: ['accent.xi'],
    settings: {
      foreground: text.malibu,
    },
  },
  {
    name: 'wikiword',
    scope: ['wikiword.xi'],
    settings: {
      foreground: text.whiskey,
    },
  },
  {
    name: "language operators like '+', '-' etc",
    scope: ['constant.other.color.rgb-value.xi'],
    settings: {
      foreground: text.invalid,
    },
  },
  {
    name: 'elements to dim',
    scope: ['punctuation.definition.tag.xi'],
    settings: {
      foreground: text.dark,
    },
  },
  {
    name: 'C++/C#',
    scope: [
      'entity.name.label.cs',
      'entity.name.scope-resolution.function.call',
      'entity.name.scope-resolution.function.definition',
    ],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    name: 'Markdown underscore-style headers',
    scope: [
      'entity.name.label.cs',
      'markup.heading.setext.1.markdown',
      'markup.heading.setext.2.markdown',
    ],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'meta.brace.square',
    scope: [' meta.brace.square'],
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    name: 'Comments',
    scope: 'comment, punctuation.definition.comment',
    settings: {
      foreground: text.lightDark,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Quote',
    scope: 'markup.quote.markdown',
    settings: {
      foreground: text.dark,
    },
  },
  {
    name: 'punctuation.definition.block.sequence.item.yaml',
    scope: 'punctuation.definition.block.sequence.item.yaml',
    settings: {
      foreground: text.lightWhite,
    },
  },
  {
    scope: [
      'constant.language.symbol.elixir',
      'constant.language.symbol.double-quoted.elixir',
    ],
    settings: {
      foreground: text.fountainBlue,
    },
  },
  {
    scope: ['entity.name.variable.parameter.cs'],
    settings: {
      foreground: text.chalky,
    },
  },
  {
    scope: ['entity.name.variable.field.cs'],
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Deleted',
    scope: 'markup.deleted',
    settings: {
      foreground: text.coral,
    },
  },
  {
    name: 'Inserted',
    scope: 'markup.inserted',
    settings: {
      foreground: text.green,
    },
  },
  {
    name: 'Underline',
    scope: 'markup.underline',
    settings: {
      fontStyle: text.underline,
    },
  },
  {
    name: 'punctuation.section.embedded.begin.php',
    scope: [
      'punctuation.section.embedded.begin.php',
      'punctuation.section.embedded.end.php',
    ],
    settings: {
      foreground: text.deepRed,
    },
  },
  {
    name: 'support.other.namespace.php',
    scope: ['support.other.namespace.php'],
    settings: {
      foreground: text.lightWhite,
    },
  },
];

module.exports = syntaxHighlight;
