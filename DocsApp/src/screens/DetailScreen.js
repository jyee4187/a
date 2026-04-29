import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function renderContent(content) {
  const lines = content.split('\n');
  const elements = [];
  let inCodeBlock = false;
  let codeLines = [];
  let codeBlockKey = null;

  lines.forEach((line, index) => {
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLines = [];
        codeBlockKey = index;
      } else {
        inCodeBlock = false;
        elements.push(
          <View key={codeBlockKey} style={styles.codeBlock}>
            <Text style={styles.codeText}>{codeLines.join('\n')}</Text>
          </View>,
        );
        codeLines = [];
        codeBlockKey = null;
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    if (line.startsWith('# ')) {
      elements.push(
        <Text key={index} style={styles.h1}>
          {line.slice(2)}
        </Text>,
      );
      return;
    }
    if (line.startsWith('## ')) {
      elements.push(
        <Text key={index} style={styles.h2}>
          {line.slice(3)}
        </Text>,
      );
      return;
    }
    if (line.startsWith('### ')) {
      elements.push(
        <Text key={index} style={styles.h3}>
          {line.slice(4)}
        </Text>,
      );
      return;
    }
    if (line.startsWith('- ') || line.match(/^\d+\./)) {
      elements.push(
        <Text key={index} style={styles.listItem}>
          {line}
        </Text>,
      );
      return;
    }
    if (line.startsWith('|')) {
      elements.push(
        <Text key={index} style={styles.tableRow}>
          {line}
        </Text>,
      );
      return;
    }
    if (line.trim() === '' || line.trim() === '---') {
      elements.push(<View key={index} style={styles.spacer} />);
      return;
    }
    const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/);
    if (parts.length > 1) {
      elements.push(
        <Text key={index} style={styles.paragraph}>
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <Text key={i} style={styles.bold}>
                  {part.slice(2, -2)}
                </Text>
              );
            }
            if (part.startsWith('`') && part.endsWith('`')) {
              return (
                <Text key={i} style={styles.inlineCode}>
                  {part.slice(1, -1)}
                </Text>
              );
            }
            return part;
          })}
        </Text>,
      );
      return;
    }
    elements.push(
      <Text key={index} style={styles.paragraph}>
        {line}
      </Text>,
    );
  });

  return elements;
}

export default function DetailScreen({ route }) {
  const { doc } = route.params;
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{doc.icon}</Text>
      </View>
      {renderContent(doc.content)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  iconContainer: {
    marginBottom: 8,
  },
  icon: {
    fontSize: 36,
  },
  h1: {
    fontSize: 26,
    fontWeight: '700',
    color: '#212529',
    marginTop: 4,
    marginBottom: 12,
  },
  h2: {
    fontSize: 20,
    fontWeight: '700',
    color: '#343a40',
    marginTop: 20,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    paddingBottom: 4,
  },
  h3: {
    fontSize: 17,
    fontWeight: '600',
    color: '#495057',
    marginTop: 14,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: '#495057',
    marginBottom: 4,
  },
  bold: {
    fontWeight: '700',
    color: '#212529',
  },
  inlineCode: {
    fontFamily: 'monospace',
    backgroundColor: '#f1f3f5',
    color: '#e83e8c',
    paddingHorizontal: 4,
    borderRadius: 3,
    fontSize: 13,
  },
  listItem: {
    fontSize: 15,
    lineHeight: 24,
    color: '#495057',
    marginLeft: 8,
    marginBottom: 2,
  },
  tableRow: {
    fontSize: 13,
    fontFamily: 'monospace',
    color: '#495057',
    backgroundColor: '#f8f9fa',
    padding: 4,
    marginBottom: 1,
  },
  spacer: {
    height: 8,
  },
  codeBlock: {
    backgroundColor: '#282c34',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#abb2bf',
    lineHeight: 20,
  },
});
