<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="xml" indent="no" omit-xml-declaration="yes"/>
	<xsl:template match="/">
		<xsl:variable name="documentNames">
			<xsl:value-of select="root/array/titel" separator=";"/>
		</xsl:variable>
		<xsl:value-of select="$documentNames"/>
	</xsl:template>
</xsl:stylesheet>