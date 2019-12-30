<template lang="pug">
.home
	v-container(grid-list-md fluid)
		// Section 1
		v-layout
			v-flex(xs12)
				Section#s1(icon="dashboard" title="Einleitung")
					.text-container
						div 
							p
								| Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot“).
							p Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
							p 
								strong Stand: 
								| 25. Dezember 2019

		v-layout
			v-flex(xs12)
				Section#s1-1(icon="toc" title="Inhaltsübersicht")
					.text-container
						div 
							ul.index
								li
									a.index-link(href="#s1")  Einleitung
								li 
									a.index-link(href="#s1-1")  Inhaltsübersicht
								li
									a.index-link(href="#s2")  Verantwortlicher
									ul
										li 
											a.index-link(href="#s2-1")  Verantwortliche Personen
								li
									a.index-link(href="#s3")  Übersicht der Verarbeitungen
									ul
										li 
											a.index-link(href="#s3-1")  Arten der verarbeiteten Daten
										li 
											a.index-link(href="#s3-2")  Kategorien betroffener Personen
										li 
											a.index-link(href="#s3-3")  Zwecke der Verarbeitung
								li
									a.index-link(href="#s4")  Maßgebliche Rechtsgrundlagen
								li
									a.index-link(href="#s5")  Sicherheitsmaßnahmen
								li
									a.index-link(href="#s6")  Übermittlung und Offenbarung von personenbezogenen Daten
								li
									a.index-link(href="#s7")  Datenverarbeitung in Drittländern
								li
									a.index-link(href="#s8")  Einsatz von Cookies
									ul 
										li
											a.index-link(href="#s8-1") Die folgenden Cookie-Typen und Funktionen werden unterschieden
								li
									a.index-link(href="#s9")  Registrierung und Anmeldung
								li
									a.index-link(href="#s10")  Blogs und Publikationsmedien
									ul 
										li
											a.index-link(href="#s10") Eingesetzte Dienste und Diensteanbieter
								li
									a.index-link(href="#s11")  Kontaktaufnahme
								li
									a.index-link(href="#s12")  Bereitstellung des Onlineangebotes und Webhosting
								li
									a.index-link(href="#s13")  Cloud-Dienste
								li
									a.index-link(href="#s14")  Webanalyse und Optimierung
									ul 
										li
											a.index-link(href="#s14-1") Eingesetzte Dienste und Diensteanbieter
								li
									a.index-link(href="#s15")  Onlinemarketing
									ul 
										li
											a.index-link(href="#s15-1") Eingesetzte Dienste und Diensteanbieter
								li
									a.index-link(href="#s16")  Präsenzen in sozialen Netzwerken
									ul 
										li
											a.index-link(href="#s16-1") Eingesetzte Dienste und Diensteanbieter
								li
									a.index-link(href="#s17")  Plugins und eingebettete Funktionen sowie Inhalte
									ul 
										li
											a.index-link(href="#s17-1") Eingesetzte Dienste und Diensteanbieter
								li
									a.index-link(href="#s18")  Planung, Organisation und Hilfswerkzeuge
								li
									a.index-link(href="#s19")  Löschung von Daten
								li
									a.index-link(href="#s20")  Änderung und Aktualisierung der Datenschutzerklärung
								li
									a.index-link(href="#s21")  Rechte der betroffenen Personen
								li
									a.index-link(href="#s22")  Begriffsdefinitionen
								li
									a.index-link(href="#s23")  Quellen

		v-layout
			v-flex(xs12)
				Section#s2(icon="mdi-account-tie-outline" title="Verantwortlicher")
					.text-container
						div 
							h3#s2-1 Verantwortliche Personen:
							table.dataTable
								tr
									td 
										strong Name:
									td René Karraß
								tr
									td 
										strong Land:
									td Deutschland
								tr
									td 
										strong E-Mail:
									td 
										a(href="mailto:rene.karrass@outlook.de") rene.karrass@outlook.de
								tr
									td 
										strong Impressum Link:
									td 
										router-link(@click.native="scrollToTop" to="/impressum") Impressum

		v-layout
			v-flex(xs12)
				Section#s3(icon="schedule" title="Übersicht der Verarbeitungen")
					.text-container
						div 
							p
								| Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und
								| verweist auf die betroffenen Personen.

							h3#s3-1 Arten der verarbeiteten Daten
							ul
								li
									p Bestandsdaten (z.B. Namen, Adressen).
								li
									p Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).
								li
									p Kontaktdaten (z.B. E-Mail, Telefonnummern).
								li
									p Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
								li
									p Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).

							h3#s3-2 Kategorien betroffener Personen
							ul
								li
									p Beschäftigte (z.B. Angestellte, Bewerber, ehemalige Mitarbeiter).
								li
									p Interessenten.
								li
									p Kommunikationspartner.
								li
									p Kunden.
								li
									p Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
							h3#s3-3 Zwecke der Verarbeitung
							ul
								li
									p Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
								li
									p Besuchsaktionsauswertung.
								li
									p Büro- und Organisationsverfahren.
								li
									p Content Delivery Network (CDN).
								li
									p Direktmarketing (z.B. per E-Mail oder postalisch).
								li
									p Feedback (z.B. Sammeln von Feedback via Online-Formular).
								li
									p Interessenbasiertes und verhaltensbezogenes Marketing.
								li
									p Kontaktanfragen und Kommunikation.
								li
									p Konversionsmessung (Messung der Effektivität von Marketingmaßnahmen).
								li
									p Profiling (Erstellen von Nutzerprofilen).
								li
									p Remarketing.
								li
									p
										| Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).
								li
									p Sicherheitsmaßnahmen.
								li
									p Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies).
								li
									p Vertragliche Leistungen und Service.
								li
									p Verwaltung und Beantwortung von Anfragen.

		v-layout
			v-flex(xs12)
				Section#s4(icon="gavel" title="Maßgebliche Rechtsgrundlagen")
					.text-container
						div 
							p
								| Im Folgenden teilen wir die Rechtsgrundlagen der Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die
								| personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass zusätzlich zu den Regelungen der DSGVO die
								| nationalen Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten können.
							ul
								li
									p
										strong Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)
										|  - Die betroffene Person hat ihre Einwilligung
										|             in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere
										|             bestimmte Zwecke gegeben.
								li
									p
										strong
											| Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)
										|  - Die
										|             Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur
										|             Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.
								li
									p
										strong Schutz lebenswichtiger Interessen (Art. 6 Abs. 1 S. 1 lit. d. DSGVO)
										|  - Die Verarbeitung ist
										|             erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu
										|             schützen.
								li
									p
										strong Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
										|  - Die Verarbeitung ist zur Wahrung
										|             der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
										|             Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener
										|             Daten erfordern, überwiegen.
							p
								strong Nationale Datenschutzregelungen in Deutschland
								| : Zusätzlich zu den Datenschutzregelungen der
								|     Datenschutz-Grundverordnung gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere
								|     das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz –
								|     BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum
								|     Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere
								|     Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
								|     Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
								|     Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von
								|     Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.

		v-layout
			v-flex(xs12)
				Section#s5(icon="security" title="Sicherheitsmaßnahmen")
					.text-container
						div 
							p
								| Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der
								| Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
								| unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher
								| Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu
								| gewährleisten.
							p
								| Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
								| Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der
								| Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren
								| eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung
								| der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung
								| bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
								| Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
							p
								strong Kürzung der IP-Adresse
								| : Sofern es uns möglich ist oder eine Speicherung der IP-Adresse nicht
								|     erforderlich ist, kürzen wir oder lassen Ihre IP-Adresse kürzen. Im Fall der Kürzung der IP-Adresse, auch als
								|     "IP-Masking" bezeichnet, wird das letzte Oktett, d.h., die letzten beiden Zahlen einer IP-Adresse, gelöscht (die
								|     IP-Adresse ist in diesem Kontext eine einem Internetanschluss durch den Online-Zugangs-Provider individuell
								|     zugeordnete Kennung). Mit der Kürzung der IP-Adresse soll die Identifizierung einer Person anhand ihrer IP-Adresse
								|     verhindert oder wesentlich erschwert werden.
							p
								strong SSL-Verschlüsselung (https)
								| : Um Ihre via unser Online-Angebot übermittelten Daten zu schützen,
								|     nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der
								|     Adresszeile Ihres Browsers.

		v-layout
			v-flex(xs12)
				Section#s6(icon="sync_alt" title="Übermittlung und Offenbarung von personenbezogenen Daten")
					.text-container
						div 
							p
								| Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen,
								| Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber
								| offengelegt werden. Zu den Empfängern dieser Daten können z.B. Zahlungsinstitute im Rahmen von Zahlungsvorgängen,
								| mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden
								| werden, gehören. In solchen Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende
								| Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.

		v-layout
			v-flex(xs12)
				Section#s7(icon="schedule" title="Datenverarbeitung in Drittländern")
					.text-container
						div 
							p
								| Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums
								| (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung
								| bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang
								| mit den gesetzlichen Vorgaben.
							p
								| Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich erforderlicher Übermittlung verarbeiten
								| oder lassen wir die Daten nur in Drittländern mit einem anerkannten Datenschutzniveau, zu denen die unter dem
								| "Privacy-Shield" zertifizierten US-Verarbeiter gehören, oder auf Grundlage besonderer Garantien, wie z.B.
								| vertraglicher Verpflichtung durch sogenannte Standardschutzklauseln der EU-Kommission, des Vorliegens von
								| Zertifizierungen oder verbindlicher interner Datenschutzvorschriften, verarbeiten (Art. 44 bis 49 DSGVO,
								| Informationsseite der EU-Kommission: 
								a(href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de" target="_blank")
									| https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
								| ).

		v-layout
			v-flex(xs12)
				Section#s8(icon="mdi-cookie" title="Einsatz von Cookies")
					.text-container
						div 
							p
								| Cookies sind Textdateien, die Daten von besuchten Websites oder Domains enthalten und von einem Browser auf dem
								| Computer des Benutzers gespeichert werden. Ein Cookie dient in erster Linie dazu, die Informationen über einen
								| Benutzer während oder nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Zu den gespeicherten Angaben
								| können z.B. die Spracheinstellungen auf einer Webseite, der Loginstatus, ein Warenkorb oder die Stelle, an der ein
								| Video geschaut wurde, gehören. Zu dem Begriff der Cookies zählen wir ferner andere Technologien, die die gleichen
								| Funktionen wie Cookies erfüllen (z.B., wenn Angaben der Nutzer anhand pseudonymer Onlinekennzeichnungen gespeichert
								| werden, auch als "Nutzer-IDs" bezeichnet)

							h3#s8-1 Die folgenden Cookie-Typen und Funktionen werden unterschieden:
							ul
								li
									strong Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):
									| Temporäre Cookies werden spätestens
									|         gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und seinen Browser geschlossen hat.
								li
									strong Permanente Cookies:
									| Permanente Cookies bleiben auch nach dem Schließen des Browsers
									|         gespeichert. So kann beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt
									|         werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die Interessen von Nutzern, die zur
									|         Reichweitenmessung oder zu Marketingzwecken verwendet werden, in einem solchen Cookie gespeichert werden.
								li
									strong First-Party-Cookies:
									| First-Party-Cookies werden von uns selbst gesetzt.
								li
									strong Third-Party-Cookies (auch: Drittanbieter-Cookies)
									| : Drittanbieter-Cookies werden hauptsächlich
									|         von Werbetreibenden (sog. Dritten) verwendet, um Benutzerinformationen zu verarbeiten.
								li
									strong Notwendige (auch: essentielle oder unbedingt erforderliche) Cookies:
									|  Cookies können zum einen
									|         für den Betrieb einer Webseite unbedingt erforderlich sein (z.B. um Logins oder andere Nutzereingaben zu
									|         speichern oder aus Gründen der Sicherheit).
								li
									strong Statistik-, Marketing- und Personalisierungs-Cookies
									| : Ferner werden Cookies im Regelfall auch
									|         im Rahmen der Reichweitenmessung eingesetzt sowie dann, wenn die Interessen eines Nutzers oder sein Verhalten
									|         (z.B. Betrachten bestimmter Inhalte, Nutzen von Funktionen etc.) auf einzelnen Webseiten in einem Nutzerprofil
									|         gespeichert werden. Solche Profile dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren potentiellen
									|         Interessen entsprechen. Dieses Verfahren wird auch als "Tracking", d.h., Nachverfolgung der potentiellen
									|         Interessen der Nutzer bezeichnet. . Soweit wir Cookies oder "Tracking"-Technologien einsetzen, informieren wir
									|         Sie gesondert in unserer Datenschutzerklärung oder im Rahmen der Einholung einer Einwilligung.
							p
								strong Hinweise zu Rechtsgrundlagen: 
								|  Auf welcher Rechtsgrundlage wir Ihre personenbezogenen Daten mit
								|     Hilfe von Cookies verarbeiten, hängt davon ab, ob wir Sie um eine Einwilligung bitten. Falls dies zutrifft und Sie
								|     in die Nutzung von Cookies einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte
								|     Einwilligung. Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten
								|     Interessen (z.B. an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und dessen Verbesserung)
								|     verarbeitet oder, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu
								|     erfüllen.
							p
								strong Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): 
								|  Abhängig davon, ob die Verarbeitung auf
								|     Grundlage einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die Möglichkeit, eine erteilte
								|     Einwilligung zu widerrufen oder der Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen
								|     (zusammenfassend als "Opt-Out" bezeichnet). Sie können Ihren Widerspruch zunächst mittels der Einstellungen Ihres
								|     Browsers erklären, z.B., indem Sie die Nutzung von Cookies deaktivieren (wobei hierdurch auch die Funktionsfähigkeit
								|     unseres Onlineangebotes eingeschränkt werden kann). Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des
								|     Onlinemarketings kann auch mittels einer Vielzahl von Diensten, vor allem im Fall des Trackings, über die Webseiten
								a(href="http://optout.aboutads.info" target="_blank") http://optout.aboutads.info
								|  und 
								a(href="http://www.youronlinechoices.com/" target="_blank") http://www.youronlinechoices.com/
								|  erklärt werden.
								|     Daneben können Sie weitere Widerspruchshinweise im Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies
								|     erhalten.
							p
								strong Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung
								| : Bevor wir Daten im Rahmen der
								|     Nutzung von Cookies verarbeiten oder verarbeiten lassen, bitten wir die Nutzer um eine jederzeit widerrufbare
								|     Einwilligung. Bevor die Einwilligung nicht ausgesprochen wurde, werden allenfalls Cookies eingesetzt, die für den
								|     Betrieb unseres Onlineangebotes erforderlich sind. Deren Einsatz erfolgt auf der Grundlage unseres Interesses und
								|     des Interesses der Nutzer an der erwarteten Funktionsfähigkeit unseres Onlineangebotes.
							//- p
								strong Cookie-Einstellungen/ -Widerspruchsmöglichkeit
								| :
							//- p
								| ""Falls Sie ein Cookie-Einwilligung-Banner nutzen (was zu empfehlen ist), können Sie an dieser Stelle die Möglichkeit
								| zu dessen Aufruf eintragen (z.B. Link oder ein sog. [Shortcode], der von Ihrer Software automatisch in eine
								| Schaltfläche/Link umgewandelt wird).""
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
										|             Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
								li
									p
										strong Rechtsgrundlagen:
										|  Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen
										|             (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).


							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
										|             Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
								li
									p
										strong Rechtsgrundlagen:
										|  Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen
										|             (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
									//- TODO: contact_support
		v-layout
			v-flex(xs12)
				Section#s9(icon="mdi-login" title="Registrierung und Anmeldung")
					.text-container
						div 
							p
								| Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden den Nutzern die erforderlichen
								| Pflichtangaben mitgeteilt und zu Zwecken der Bereitstellung des Nutzerkontos auf Grundlage vertraglicher
								| Pflichterfüllung verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die Login-Informationen (Name,
								| Passwort sowie eine E-Mail-Adresse). Die im Rahmen der Registrierung eingegebenen Daten werden für die Zwecke der
								| Nutzung des Nutzerkontos und dessen Zwecks verwendet.
							p
								| Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind, wie z.B. technische Änderungen, per E-Mail
								| informiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das Nutzerkonto,
								| vorbehaltlich einer gesetzlichen Aufbewahrungspflicht, gelöscht. Es obliegt den Nutzern, ihre Daten bei erfolgter
								| Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer gespeicherte
								| Daten des Nutzers unwiederbringlich zu löschen.
							p
								| Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des Nutzerkontos
								| speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage
								| unserer berechtigten Interessen als auch jener der Nutzer an einem Schutz vor Missbrauch und sonstiger unbefugter
								| Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur Verfolgung
								| unserer Ansprüche erforderlich oder es besteht hierzu besteht eine gesetzliche Verpflichtung.
							p
								strong Online-Forum
								| : Die Teilnahme am Forum setzt eine Registrierung voraus, bei der, vorbehaltlich anderer
								|     Angaben im Registrierungsformular, ein oder Ihr Name, ein Kennwort und die E-Mail-Adresse, an welche die
								|     Zugangsdaten versendet werden, angegeben werden müssen. Aus Gründen der Sicherheit sollte das Kennwort dem Stand der
								|     Technik entsprechen, also kompliziert sein (hierauf werden Nutzer notfalls im Rahmen der Registrierung hingewiesen)
								|     und nicht an anderer Stelle verwendet werden. Die Beiträge im Forum sind für die Öffentlichkeit sichtbar, es sei
								|     denn, deren Sichtbarkeit ist auf bestimmte Mitglieder oder Mitgliedergruppen beschränkt. Die Beiträge der Verfasser
								|     werden mit deren Namen, sofern registriert oder angegeben, dem Zeitpunkt und dem Eintragsinhalt gespeichert. Bei
								|     Anmeldungen und beim Verfassen von Einträgen werden ferner die IP-Adressen der Nutzer gespeichert, falls die
								|     Einträge einen unzulässigen Inhalt aufweisen sollten und die IP-Adressen der Rechtsverfolgung dienen könnten. Der
								|     Verantwortliche behält sich vor, die Anmeldungen und Einträge auf Grundlage einer sachgerechten Abwägung zu löschen.
							p
								strong Zwei-Faktor-Authentifizierung
								| : Die Zwei-Faktor-Authentifizierung bietet eine zusätzliche
								|     Sicherheitsebene für Ihr Benutzerkonto und stellt sicher, dass nur Sie auf Ihr Konto zugreifen können, auch, wenn
								|     jemand anderes Ihr Passwort kennt.
							p
								| Zu diesem Zweck müssen Sie zusätzlich zu Ihrem Passwort eine weitere Authentifizierungsmaßnahme durchführen (z.B.
								| einen an ein mobiles Gerät gesandten Code eingeben). Wir werden Sie über das von uns eingesetzte Verfahren
								| informieren.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
										|             Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Meta-/Kommunikationsdaten (z.B.
										|             Geräte-Informationen, IP-Adressen), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
										|             Zugriffszeiten).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
								li
									p
										strong Zwecke der Verarbeitung:
										|  Vertragliche Leistungen und Service, Sicherheitsmaßnahmen,
										|             Verwaltung und Beantwortung von Anfragen.
								li
									p
										strong Rechtsgrundlagen:
										|  Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Vertragserfüllung und
										|             vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
										|             f. DSGVO).

		v-layout
			v-flex(xs12)
				Section#s10(icon="mdi-post" title="Blogs und Publikationsmedien")
					.text-container
						div 
							p
								| Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und Publikation (nachfolgend
								| "Publikationsmedium"). Die Daten der Leser werden für die Zwecke des Publikationsmediums nur insoweit verarbeitet,
								| als es für dessen Darstellung und die Kommunikation zwischen Autoren und Lesern oder aus Gründen der Sicherheit
								| erforderlich ist. Im Übrigen verweisen wir auf die Informationen zur Verarbeitung der Besucher unseres
								| Publikationsmediums im Rahmen dieser Datenschutzhinweise.
							p
								strong Kommentare und Beiträge
								| : Wenn Nutzer Kommentare oder sonstige Beiträge hinterlassen, können ihre
								|     IP-Adressen auf Grundlage unserer berechtigten Interessen gespeichert werden. Das erfolgt zu unserer Sicherheit,
								|     falls jemand in Kommentaren und Beiträgen widerrechtliche Inhalte hinterlässt (Beleidigungen, verbotene politische
								|     Propaganda etc.). In diesem Fall können wir selbst für den Kommentar oder Beitrag belangt werden und sind daher an
								|     der Identität des Verfassers interessiert.
							p
								| Des Weiteren behalten wir uns vor, auf Grundlage unserer berechtigten Interessen die Angaben der Nutzer zwecks
								| Spamerkennung zu verarbeiten.
							p
								| Auf derselben Rechtsgrundlage behalten wir uns vor, im Fall von Umfragen die IP-Adressen der Nutzer für deren Dauer
								| zu speichern und Cookies zu verwenden, um Mehrfachabstimmungen zu vermeiden.
							p
								| Die im Rahmen der Kommentare und Beiträge mitgeteilten Informationen zur Person, etwaige Kontakt- sowie
								| Webseiteninformationen als auch die inhaltlichen Angaben werden von uns bis zum Widerspruch der Nutzer dauerhaft
								| gespeichert.
							p
								strong Kommentarabonnements
								| : Die Nachfolgekommentare können von Nutzern mit deren Einwilligung abonniert
								|     werden. Die Nutzer erhalten eine Bestätigungsemail, um zu überprüfen, ob sie der Inhaber der eingegebenen
								|     Emailadresse sind. Nutzer können laufende Kommentarabonnements jederzeit abbestellen. Die Bestätigungsemail wird
								|     Hinweise zu den Widerrufsmöglichkeiten enthalten. Für die Zwecke des Nachweises der Einwilligung der Nutzer
								|     speichern wir den Anmeldezeitpunkt nebst der IP-Adresse der Nutzer und löschen diese Informationen, wenn Nutzer sich
								|     von dem Abonnement abmelden.
							p
								| Sie können den Empfang unseres Abonnements jederzeit kündigen, d.h., Ihre Einwilligungen widerrufen. Wir können die
								| ausgetragenen E-Mail-Adressen bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern, bevor wir
								| sie löschen, um eine ehemals gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten wird auf den
								| Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag ist jederzeit möglich,
								| sofern zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird.
							p
								strong Profilbilder von Gravatar
								| : Wir setzen innerhalb unseres Onlineangebotes und insbesondere im Blog den
								|     Dienst Gravatar ein.
							p
								| Gravatar ist ein Dienst, bei dem sich Nutzer anmelden und Profilbilder und ihre E-Mail-Adressen hinterlegen können.
								| Wenn Nutzer mit der jeweiligen E-Mail-Adresse auf anderen Onlinepräsenzen (vor allem in Blogs) Beiträge oder
								| Kommentare hinterlassen, können deren Profilbilder neben den Beiträgen oder Kommentaren dargestellt werden. Hierzu
								| wird die von den Nutzern mitgeteilte E-Mail-Adresse an Gravatar zwecks Prüfung, ob zu ihr ein Profil gespeichert
								| ist, verschlüsselt übermittelt. Dies ist der einzige Zweck der Übermittlung der E-Mail-Adresse. Sie wird nicht für
								| andere Zwecke verwendet, sondern danach gelöscht.
							p
								| Die Nutzung von Gravatar erfolgt auf Grundlage unserer berechtigten Interessen, da wir mit Hilfe von Gravatar den
								| Beitrags- und Kommentarverfassern die Möglichkeit bieten, ihre Beiträge mit einem Profilbild zu personalisieren.
							p
								| Durch die Anzeige der Bilder bringt Gravatar die IP-Adresse der Nutzer in Erfahrung, da dies für eine Kommunikation
								| zwischen einem Browser und einem Onlineservice notwendig ist.
							p
								| Wenn Nutzer nicht möchten, dass ein mit ihrer E-Mail-Adresse bei Gravatar verknüpftes Benutzerbild in den Kommentaren
								| erscheint, sollten sie zum Kommentieren eine E-Mail-Adresse nutzen, welche nicht bei Gravatar hinterlegt ist. Wir
								| weisen ferner darauf hin, dass es auch möglich ist eine anonyme oder gar keine E-Mail-Adresse zu verwenden, falls
								| die Nutzer nicht wünschen, dass die eigene E-Mail-Adresse an Gravatar übersendet wird. Nutzer können die Übertragung
								| der Daten komplett verhindern, indem sie unser Kommentarsystem nicht nutzen.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
										|             Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte
										|             Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
										|             IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
								li
									p
										strong Zwecke der Verarbeitung:
										|  Vertragliche Leistungen und Service, Feedback (z.B. Sammeln von
										|             Feedback via Online-Formular), Sicherheitsmaßnahmen, Verwaltung und Beantwortung von Anfragen,
										|             Kontaktanfragen und Kommunikation, Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
								li
									p
										strong Rechtsgrundlagen:
										|  Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
										|             DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO), Einwilligung (Art. 6 Abs. 1 S. 1 lit. a
										|             DSGVO), Schutz lebenswichtiger Interessen (Art. 6 Abs. 1 S. 1 lit. d. DSGVO).
							h3#s10-1 Eingesetzte Dienste und Diensteanbieter:
							ul.m-elements
								li
									p
										strong Profilbilder von Gravatar:
										|  Profilbilder; Dienstanbieter: Automattic Inc., 60 29th Street
										|             #343, San Francisco, CA 94110, USA; Website: 
										a(href="https://automattic.com" target="_blank") https://automattic.com
										| ; Datenschutzerklärung: 
										a(href="https://automattic.com/privacy" target="_blank") https://automattic.com/privacy
										| .

		v-layout
			v-flex(xs12)
				Section#s11(icon="mdi-contact-mail" title="Kontaktaufnahme")
					.text-container
						div 
							p
								| Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) werden die
								| Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger
								| angefragter Maßnahmen erforderlich ist.
							p
								| Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder vorvertraglichen Beziehungen erfolgt zur
								| Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf
								| Grundlage der berechtigten Interessen an der Beantwortung der Anfragen.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
										|             Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte
										|             Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
										|             IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Kommunikationspartner.
								li
									p
										strong Zwecke der Verarbeitung:
										|  Kontaktanfragen und Kommunikation.
								li
									p
										strong Rechtsgrundlagen:
										|  Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
										|             DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
							//- div developer_board
								h3 Kontaktseite
								p
									router-link(@click.native="scrollToTop" to="/kontakt") Kontakt

		v-layout
			v-flex(xs12)
				Section#s12(icon="mdi-server" title="Bereitstellung des Onlineangebotes und Webhosting")
					.text-container
						div 
							p
								| Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder
								| mehreren Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot
								| abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
								| Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.
							p
								| Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die Nutzer unseres
								| Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu
								| gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser ausliefern zu
								| können, und alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten Eingaben.
							p
								strong E-Mail-Versand und -Hosting
								| : Die von uns in Anspruch genommenen Webhosting-Leistungen umfassen
								|     ebenfalls den Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden die Adressen der
								|     Empfänger sowie Absender als auch weitere Informationen betreffend den E-Mailversand (z.B. die beteiligten Provider)
								|     sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der Erkennung
								|     von SPAM verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im Internet grundsätzlich nicht
								|     verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber (sofern
								|     kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den Servern, von denen sie
								|     abgesendet und empfangen werden. Wir können daher für den Übertragungsweg der E-Mails zwischen dem Absender und dem
								|     Empfang auf unserem Server keine Verantwortung übernehmen.
							p
								strong Erhebung von Zugriffsdaten und Logfiles
								| : Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu
								|     jedem Zugriff auf den Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse und Name der
								|     abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen
								|     Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im
								|     Regelfall IP-Adressen und der anfragende Provider gehören.
							p
								| Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der Server
								| zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um
								| die Auslastung der Server und ihre Stabilität sicherzustellen.
							p
								strong Content-Delivery-Network
								| : Wir setzen ein "Content-Delivery-Network" (CDN) ein. Ein CDN ist ein
								|     Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder
								|     Programm-Skripte, mit Hilfe regional verteilter und über das Internet verbundener Server schneller und sicherer
								|     ausgeliefert werden können.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos),
										|             Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten
										|             (z.B. Geräte-Informationen, IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
								li
									p
										strong Zwecke der Verarbeitung:
										|  Content Delivery Network (CDN).
								li
									p
										strong Rechtsgrundlagen:
										|  Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).

		v-layout
			v-flex(xs12)
				Section#s13(icon="cloud" title="Cloud-Dienste")
					.text-container
						div 
							p
								| Wir nutzen über das Internet zugängliche und auf den Servern ihrer Anbieter ausgeführte Softwaredienste (sogenannte
								| "Cloud-Dienste", auch bezeichnet als "Software as a Service") für die folgenden Zwecke: Dokumentenspeicherung und
								| Verwaltung, Kalenderverwaltung, E-Mail-Versand, Tabellenkalkulationen und Präsentationen, Austausch von Dokumenten,
								| Inhalten und Informationen mit bestimmten Empfängern oder Veröffentlichung von Webseiten, Formularen oder sonstigen
								| Inhalten und Informationen sowie Chats und Teilnahme an Audio- und Videokonferenzen.
							p
								| In diesem Rahmen können personenbezogenen Daten verarbeitet und auf den Servern der Anbieter gespeichert werden,
								| soweit diese Bestandteil von Kommunikationsvorgängen mit uns sind oder von uns sonst, wie im Rahmen dieser
								| Datenschutzerklärung dargelegt, verarbeitet werden. Zu diesen Daten können insbesondere Stammdaten und Kontaktdaten
								| der Nutzer, Daten zu Vorgängen, Verträgen, sonstigen Prozessen und deren Inhalte gehören. Die Anbieter der
								| Cloud-Dienste verarbeiten ferner Nutzungsdaten und Metadaten, die von ihnen zu Sicherheitszwecken und zur
								| Serviceoptimierung verwendet werden.
							p
								| Sofern wir mit Hilfe der Cloud-Dienste für andere Nutzer oder öffentlich zugängliche Webseiten Formulare o.a.
								| Dokumente und Inhalte bereitstellen, können die Anbieter Cookies auf den Geräten der Nutzer für Zwecke der
								| Webanalyse oder, um sich Einstellungen der Nutzer (z.B. im Fall der Mediensteuerung) zu merken, speichern.
							p
								strong Hinweise zu Rechtsgrundlagen:
								|  Sofern wir um eine Einwilligung in den Einsatz der Cloud-Dienste
								|     bitten, ist die Rechtsgrundlage der Verarbeitung die Einwilligung. Ferner kann deren Einsatz ein Bestandteil unserer
								|     (vor)vertraglichen Leistungen sein, sofern der Einsatz der Cloud-Dienste in diesem Rahmen vereinbart wurde.
								|     Ansonsten werden die Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h., Interesse an effizienten
								|     und sicheren Verwaltungs- und Kollaborationsprozessen) verarbeitet
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
										|             Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte
										|             Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
										|             IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Kunden, Beschäftigte (z.B. Angestellte, Bewerber, ehemalige
										|             Mitarbeiter), Interessenten, Kommunikationspartner.
								li
									p
										strong Zwecke der Verarbeitung:
										|  Büro- und Organisationsverfahren.
								li
									p
										strong Rechtsgrundlagen:
										|  Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Vertragserfüllung und
										|             vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
										|             f. DSGVO).

		v-layout
			v-flex(xs12)
				Section#s14(icon="mdi-chart-areaspline" title="Webanalyse und Optimierung")
					.text-container
						div 
							p
								| Die Webanalyse (auch als "Reichweitenmessung" bezeichnet) dient der Auswertung der Besucherströme unseres
								| Onlineangebotes und kann Verhalten, Interessen oder demographische Informationen zu den Besuchern, wie z.B. das
								| Alter oder das Geschlecht, als pseudonyme Werte umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B. erkennen,
								| zu welcher Zeit unser Onlineangebot oder dessen Funktionen oder Inhalte am häufigsten genutzt werden oder zur
								| Wiederverwendung einladen. Ebenso können wir nachvollziehen, welche Bereiche der Optimierung bedürfen.
							p
								| Neben der Webanalyse können wir auch Testverfahren einsetzen, um z.B. unterschiedliche Versionen unseres
								| Onlineangebotes oder seiner Bestandteile zu testen und optimieren.
							p
								| Zu diesen Zwecken können sogenannte Nutzerprofile angelegt und in einer Datei (sogenannte "Cookie") gespeichert oder
								| ähnliche Verfahren mit dem gleichen Zweck genutzt werden. Zu diesen Angaben können z.B. betrachtete Inhalte,
								| besuchte Webseiten und dort genutzte Elemente und technische Angaben, wie der verwendete Browser, das verwendete
								| Computersystem sowie Angaben zu Nutzungszeiten gehören. Sofern Nutzer in die Erhebung ihrer Standortdaten
								| eingewilligt haben, können je nach Anbieter auch diese verarbeitet werden.
							p
								| Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir ein IP-Masking-Verfahren (d.h.,
								| Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die im Rahmen von Webanalyse,
								| A/B-Testings und Optimierung keine Klardaten der Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert, sondern
								| Pseudonyme. D.h., wir als auch die Anbieter der eingesetzten Software kennen nicht die tatsächliche Identität der
								| Nutzer, sondern nur den für Zwecke der jeweiligen Verfahren in deren Profilen gespeicherten Angaben.
							p
								strong Hinweise zu Rechtsgrundlagen:
								|  Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
								|     Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten werden die
								|     Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an effizienten, wirtschaftlichen und
								|     empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur
								|     Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
										|             Zugriffszeiten).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
								li
									p
										strong Zwecke der Verarbeitung:
										|  Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
										|             wiederkehrender Besucher), Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies),
										|             Besuchsaktionsauswertung, Profiling (Erstellen von Nutzerprofilen), Interessenbasiertes und
										|             verhaltensbezogenes Marketing.
								li
									p
										strong Sicherheitsmaßnahmen:
										|  IP-Masking (Pseudonymisierung der IP-Adresse).
								li
									p
										strong Rechtsgrundlagen:
										|  Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen
										|             (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
							h3#s14-1 Eingesetzte Dienste und Diensteanbieter:
							ul.m-elements
								li
									p
										strong Google Optimize:
										|  Verwendung von Google-Analytics-Daten zu Zwecken der Verbesserung von
										|             Bereichen unseres Onlineangebotes und einer verbesserten Ausrichtung unserer Marketingmaßnahmen an
										|             potentiellen Interessen der Nutzer; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street,
										|             Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA;
										|             Website: 
										a(href="https://optimize.google.com" target="_blank") https://optimize.google.com
										| ;
										|             Datenschutzerklärung: 
										a(href="https://policies.google.com/privacy" target="_blank") https://policies.google.com/privacy
										| ; Privacy Shield (Gewährleistung
										|             Datenschutzniveau bei Verarbeitung von Daten in den USA): 
										a(href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" target="_blank") https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
										| ;
										|             Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: 
										a(href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank") http://tools.google.com/dlpage/gaoptout?hl=de
										| , Einstellungen für die Darstellung von
										|             Werbeeinblendungen: 
										a(href="https://adssettings.google.com/authenticated" target="_blank") https://adssettings.google.com/authenticated
										| .

		v-layout
			v-flex(xs12)
				Section#s15(icon="mdi-cart" title="Onlinemarketing")
					.text-container
						div 
							p
								| Wir verarbeiten personenbezogene Daten zu Zwecken des Onlinemarketings, worunter insbesondere die Vermarktung von
								| Werbeflächen oder Darstellung von werbenden und sonstigen Inhalten (zusammenfassend als "Inhalte" bezeichnet) anhand
								| potentieller Interessen der Nutzer sowie die Messung ihrer Effektivität fallen kann.
							p
								| Zu diesen Zwecken werden sogenannte Nutzerprofile angelegt und in einer Datei (sogenannte "Cookie") gespeichert oder
								| ähnliche Verfahren genutzt, mittels derer die für die Darstellung der vorgenannten Inhalte relevante Angaben zum
								| Nutzer gespeichert werden. Zu diesen Angaben können z.B. betrachtete Inhalte, besuchte Webseiten, genutzte
								| Onlinenetzwerke, aber auch Kommunikationspartner und technische Angaben, wie der verwendete Browser, das verwendete
								| Computersystem sowie Angaben zu Nutzungszeiten gehören. Sofern Nutzer in die Erhebung ihrer Standortdaten
								| eingewilligt haben, können auch diese verarbeitet werden.
							p
								| Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir zur Verfügung stehende
								| IP-Masking-Verfahren (d.h., Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden
								| im Rahmen des Onlinemarketingverfahren keine Klardaten der Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert,
								| sondern Pseudonyme. D.h., wir als auch die Anbieter der Onlinemarketingverfahren kennen nicht die tatsächlich
								| Identität der Nutzer, sondern nur die in deren Profilen gespeicherten Angaben.
							p
								| Die Angaben in den Profilen werden im Regelfall in den Cookies oder mittels ähnlicher Verfahren gespeichert. Diese
								| Cookies können später generell auch auf anderen Webseiten die dasselbe Onlinemarketingverfahren einsetzen,
								| ausgelesen und zu Zwecken der Darstellung von Inhalten analysiert als auch mit weiteren Daten ergänzt und auf dem
								| Server des Onlinemarketingverfahrensanbieters gespeichert werden.
							p
								| Ausnahmsweise können Klardaten den Profilen zugeordnet werden. Das ist der Fall, wenn die Nutzer z.B. Mitglieder
								| eines sozialen Netzwerks sind, dessen Onlinemarketingverfahren wir einsetzen und das Netzwerk die Profile der Nutzer
								| im den vorgenannten Angaben verbindet. Wir bitten darum, zu beachten, dass Nutzer mit den Anbietern zusätzliche
								| Abreden, z.B. durch Einwilligung im Rahmen der Registrierung, treffen können.
							p
								| Wir erhalten grundsätzlich nur Zugang zu zusammengefassten Informationen über den Erfolg unserer Werbeanzeigen.
								| Jedoch können wir im Rahmen sogenannter Konversionsmessungen prüfen, welche unserer Onlinemarketingverfahren zu
								| einer sogenannten Konversion geführt haben, d.h. z.B., zu einem Vertragsschluss mit uns. Die Konversionsmessung wird
								| alleine zur Analyse des Erfolgs unserer Marketingmaßnahmen verwendet.
							p
								| Solange nicht anders angegeben, bitten wir Sie davon auszugehen, dass verwendete Cookies für einene Zeitraum von zwei
								| Jahren gespeichert werden.
							p
								strong Hinweise zu Rechtsgrundlagen:
								|  Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
								|     Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten werden die
								|     Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an effizienten, wirtschaftlichen und
								|     empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur
								|     Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
										|             Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten),
										|             Interessenten.
								li
									p
										strong Zwecke der Verarbeitung:
										|  Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung
										|             von Cookies), Remarketing, Besuchsaktionsauswertung, Interessenbasiertes und verhaltensbezogenes Marketing,
										|             Profiling (Erstellen von Nutzerprofilen), Konversionsmessung (Messung der Effektivität von
										|             Marketingmaßnahmen), Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).
								li
									p
										strong Sicherheitsmaßnahmen:
										|  IP-Masking (Pseudonymisierung der IP-Adresse).
								li
									p
										strong Rechtsgrundlagen:
										|  Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen
										|             (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
								li
									p
										strong Widerspruchsmöglichkeit (Opt-Out):
										|  Wir verweisen auf die Datenschutzhinweise der jeweiligen
										|             Anbieter und die zu den Anbietern angegebenen Widerspruchsmöglichkeiten (sog. "Opt-Out"). Sofern keine
										|             explizite Opt-Out-Möglichkeit angegeben wurde, besteht zum einen die Möglichkeit, dass Sie Cookies in den
										|             Einstellungen Ihres Browsers abschalten. Hierdurch können jedoch Funktionen unseres Onlineangebotes
										|             eingeschränkt werden. Wir empfehlen daher zusätzlich die folgenden Opt-Out-Möglichkeiten, die
										|             zusammenfassend auf jeweilige Gebiete gerichtet angeboten werden:
										|             a) Europa: 
										a(href="https://www.youronlinechoices.eu" target="_blank") https://www.youronlinechoices.eu
										| .
										|             b) Kanada: 
										a(href="https://www.youradchoices.ca/choices" target="_blank") https://www.youradchoices.ca/choices
										| .
										|             c) USA: 
										a(href="https://www.aboutads.info/choices" target="_blank") https://www.aboutads.info/choices
										| .
										|             d) Gebietsübergreifend: 
										a(href="http://optout.aboutads.info" target="_blank") http://optout.aboutads.info
										| .
							h3#s15-1 Eingesetzte Dienste und Diensteanbieter:
							ul.m-elements
								li
									p
										strong Google Tag Manager:
										|  Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags über
										|             eine Oberfläche verwalten können (und so z.B. Google Analytics sowie andere Google-Marketing-Dienste in
										|             unser Onlineangebot einbinden). Der Tag Manager selbst (welches die Tags implementiert) verarbeitet keine
										|             personenbezogenen Daten der Nutzer. Im Hinblick auf die Verarbeitung der personenbezogenen Daten der Nutzer
										|             wird auf die folgenden Angaben zu den Google-Diensten verwiesen. Dienstanbieter: Google Ireland Limited,
										|             Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway,
										|             Mountain View, CA 94043, USA; Website: 
										a(href="https://marketingplatform.google.com" target="_blank") https://marketingplatform.google.com
										| ; Datenschutzerklärung: 
										a(href="https://policies.google.com/privacy" target="_blank") https://policies.google.com/privacy
										| ;
										|             Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): 
										a(href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" target="_blank") https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
										| .
								li
									p
										strong Google Analytics:
										|  Onlinemarketing und Webanalyse; Dienstanbieter: Google Ireland Limited,
										|             Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway,
										|             Mountain View, CA 94043, USA; Website: 
										a(href="https://marketingplatform.google.com/intl/de/about/analytics/" target="_blank") https://marketingplatform.google.com/intl/de/about/analytics/
										| ; Datenschutzerklärung:
										a(href="https://policies.google.com/privacy" target="_blank") https://policies.google.com/privacy
										| ;
										|             Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): 
										a(href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" target="_blank") https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
										| ;
										|             Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: 
										a(href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank") http://tools.google.com/dlpage/gaoptout?hl=de
										| , Einstellungen für die Darstellung von
										|             Werbeeinblendungen: 
										a(href="https://adssettings.google.com/authenticated" target="_blank") https://adssettings.google.com/authenticated
										| .

		v-layout
			v-flex(xs12)
				Section#s16(icon="mdi-cellphone-message" title="Präsenzen in sozialen Netzwerken")
					.text-container
						div 
							p
								| Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke, um mit den dort aktiven Nutzern zu kommunizieren oder
								| um dort Informationen über uns anzubieten.
							p
								| Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden
								| können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer
								| erschwert werden könnte. Im Hinblick auf US-Anbieter, die unter dem Privacy-Shield zertifiziert sind oder
								| vergleichbare Garantien eines sicheren Datenschutzniveaus bieten, weisen wir darauf hin, dass sie sich damit
								| verpflichten, die Datenschutzstandards der EU einzuhalten.
							p
								| Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke
								| verarbeitet. So können z.B. anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer
								| Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen
								| innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen
								| Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die
								| Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den
								| Nutzern verwendeten Geräte gespeichert werden (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen
								| sind und bei diesen eingeloggt sind).
							p
								| Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-Out)
								| verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.
							p
								| Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am
								| effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten
								| der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe
								| benötigen, dann können Sie sich an uns wenden.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
										|             Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte
										|             Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
										|             IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
								li
									p
										strong Zwecke der Verarbeitung:
										|  Kontaktanfragen und Kommunikation, Tracking (z.B.
										|             interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies), Remarketing.
								li
									p
										strong Rechtsgrundlagen:
										|  Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
							h3#s16-1 Eingesetzte Dienste und Diensteanbieter:
							ul.m-elements
								li
									p
										strong LinkedIn:
										|  Soziales Netzwerk; Dienstanbieter: LinkedIn Ireland Unlimited Company, Wilton
										|             Place, Dublin 2, Irland; Website: 
										a(href="https://www.linkedin.com" target="_blank") https://www.linkedin.com
										| ; Datenschutzerklärung: 
										a(href="https://www.linkedin.com/legal/privacy-policy" target="_blank") https://www.linkedin.com/legal/privacy-policy
										| ; Privacy Shield (Gewährleistung
										|             Datenschutzniveau bei Verarbeitung von Daten in den USA): 
										a(href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active" target="_blank") https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active
										| ;
										|             Widerspruchsmöglichkeit (Opt-Out): 
										a(href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank") https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
										| .
								li
									p
										strong Xing:
										|  Soziales Netzwerk; Dienstanbieter: XING AG, Dammtorstraße 29-32, 20354 Hamburg,
										|             Deutschland; Website: 
										a(href="https://www.xing.de" target="_blank") https://www.xing.de
										| ;
										|             Datenschutzerklärung: 
										a(href="https://privacy.xing.com/de/datenschutzerklaerung" target="_blank") https://privacy.xing.com/de/datenschutzerklaerung
										| .

		v-layout
			v-flex(xs12)
				Section#s17(icon="mdi-toy-brick-outline" title="Plugins und eingebettete Funktionen sowie Inhalte")
					.text-container
						div 
							p
								| Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter
								| (nachfolgend bezeichnet als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos
								| oder Social-Media-Schaltflächen sowie Beiträge handeln (nachfolgend einheitlich bezeichnet als "Inhalte”).
							p
								| Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da
								| sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die
								| Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren
								| jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner
								| sogenannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für statistische oder
								| Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten
								| dieser Webseite, ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer
								| gespeichert werden und unter anderem technische Informationen zum Browser und zum Betriebssystem, zu verweisenden
								| Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten als auch mit solchen
								| Informationen aus anderen Quellen verbunden werden.
							p
								strong Hinweise zu Rechtsgrundlagen:
								|  Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
								|     Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten werden die
								|     Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an effizienten, wirtschaftlichen und
								|     empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur
								|     Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.
							p
								strong Einbindung von Drittsoftware, Skripten oder Frameworks (z. B. jQuery)
								| : Wir binden in unser
								|     Onlineangebot Software ein, die wir von Servern anderer Anbieter abrufen (z.B. Funktions-Bibliotheken, die wir
								|     zwecks Darstellung oder Nutzerfreundlichkeit unseres Onlineangebotes verwenden). Hierbei erheben die jeweiligen
								|     Anbieter die IP-Adresse der Nutzer und können diese zu Zwecken der Übermittlung der Software an den Browser der
								|     Nutzer sowie zu Zwecken der Sicherheit, als auch zur Auswertung und Optimierung ihres Angebotes verarbeiten.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
										|             Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen), Kontaktdaten (z.B.
										|             E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).
								li
									p
										strong Betroffene Personen:
										|  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten),
										|             Kommunikationspartner.
								li
									p
										strong Zwecke der Verarbeitung:
										|  Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit,
										|             Vertragliche Leistungen und Service, Kontaktanfragen und Kommunikation, Direktmarketing (z.B. per E-Mail
										|             oder postalisch), Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies),
										|             Interessenbasiertes und verhaltensbezogenes Marketing, Profiling (Erstellen von Nutzerprofilen).
								li
									p
										strong Rechtsgrundlagen:
										|  Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO), Einwilligung
										|             (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
							h3#s17-1 Eingesetzte Dienste und Diensteanbieter:
							ul.m-elements
								li
									p
										strong Google Fonts:
										|  Wir binden die Schriftarten ("Google Fonts") des Anbieters Google ein, wobei
										|             die Daten der Nutzer allein zu Zwecken der Darstellung der Schriftarten im Browser der Nutzer verwendet
										|             werden. Die Einbindung erfolgt auf Grundlage unserer berechtigten Interessen an einer technisch sicheren,
										|             wartungsfreien und effizienten Nutzung von Schriftarten, deren einheitlicher Darstellung sowie unter
										|             Berücksichtigung möglicher lizenzrechtlicher Restriktionen für deren Einbindung. Dienstanbieter: Google
										|             Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600
										|             Amphitheatre Parkway, Mountain View, CA 94043, USA; Website: 
										a(href="https://fonts.google.com/" target="_blank") https://fonts.google.com/
										| ; Datenschutzerklärung: 
										a(href="https://policies.google.com/privacy" target="_blank") https://policies.google.com/privacy
										| ;
										|             Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): 
										a(href="https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active" target="_blank") https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active
										| .
								li
									p
										strong LinkedIn Plugins und -Schaltflächen:
										|  LinkedIn Plugins und -Schaltflächen - Hierzu können
										|             z.B. Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte dieses
										|             Onlineangebotes innerhalb von LinkedIn teilen können. Dienstanbieter: LinkedIn Ireland Unlimited Company,
										|             Wilton Place, Dublin 2, Irland; Website: 
										a(href="https://www.instagram.com" target="_blank") https://www.instagram.com
										| ; Datenschutzerklärung: 
										a(href="https://www.linkedin.com/legal/privacy-policy" target="_blank") https://www.linkedin.com/legal/privacy-policy
										| ; Privacy Shield (Gewährleistung
										|             Datenschutzniveau bei Verarbeitung von Daten in den USA): 
										a(href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active" target="_blank") https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active
										| ;
										|             Widerspruchsmöglichkeit (Opt-Out): 
										a(href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank") https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
										| .
								li
									p
										strong MyFonts:
										|  Schriftarten; im Rahmen des Schriftartenabrufs verarbeitete Daten die
										|             Identifikationsnummer des Webfont-Projektes (anonymisiert), die URL der lizenzierten Website, die mit einer
										|             Kundennummer verknüpft ist, um den Lizenznehmer und die lizenzierten Webfonts zu identifizieren, und die
										|             Referrer URL; die anonymisierte Webfont-Projekt-Identifikationsnummer wird in verschlüsselten
										|             Protokolldateien mit solchen Daten für 30 Tage, um die monatliche Anzahl der Seitenaufrufe zu ermitteln,
										|             gespeichert; Nach einer solchen Extraktion und Speicherung der Anzahl der Seitenaufrufe werden die
										|             Protokolldateien gelöscht; Dienstanbieter: Monotype Imaging Holdings Inc., 600 Unicorn Park Drive, Woburn,
										|             Massachusetts 01801, USA; Website: 
										a(href="https://www.myfonts.co" target="_blank") https://www.myfonts.co
										| ; Datenschutzerklärung: 
										a(href="https://www.myfonts.com/info/legal/#Privacy" target="_blank") https://www.myfonts.com/info/legal/#Privacy
										| .
								li
									p
										strong Xing Plugins und -Schaltflächen:
										|  Xing Plugins und -Schaltflächen - Hierzu können z.B.
										|             Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte dieses
										|             Onlineangebotes innerhalb von Xing teilen können. Dienstanbieter: XING AG, Dammtorstraße 29-32, 20354
										|             Hamburg, Deutschland; Website: 
										a(href="https://www.xing.com" target="_blank") https://www.xing.com
										| ;
										|             Datenschutzerklärung: 
										a(href="https://privacy.xing.com/de/datenschutzerklaerung" target="_blank") https://privacy.xing.com/de/datenschutzerklaerung
										| .
										
		v-layout
			v-flex(xs12)
				Section#s18(icon="mdi-clipboard-list-outline" title="Planung, Organisation und Hilfswerkzeuge")
					.text-container
						div 
							p
								| Wir setzen Dienstleistungen, Plattformen und Software anderer Anbieter (nachfolgend bezeichnet als "Drittanbieter”)
								| zu Zwecken der Organisation, Verwaltung, Planung sowie Erbringung unserer Leistungen ein. Bei der Auswahl der
								| Drittanbieter und ihrer Leistungen beachten wir die gesetzlichen Vorgaben.
							p
								| In diesem Rahmen können personenbezogenen Daten verarbeitet und auf den Servern der Drittanbieter gespeichert werden.
								| Hiervon können diverse Daten betroffen sein, die wir entsprechend dieser Datenschutzerklärung verarbeiten. Zu diesen
								| Daten können insbesondere Stammdaten und Kontaktdaten der Nutzer, Daten zu Vorgängen, Verträgen, sonstigen Prozessen
								| und deren Inhalte gehören.
							p
								| Sofern Nutzer im Rahmen der Kommunikation, von Geschäfts- oder anderen Beziehungen mit uns auf die Drittanbieter bzw.
								| deren Software oder Plattformen verwiesen werden, können die Drittanbieter Nutzungsdaten und Metadaten zu
								| Sicherheitszwecken, zur Serviceoptimierung oder zu Marketingzwecken verarbeiten. Wir bitten daher darum, die
								| Datenschutzhinweise der jeweiligen Drittanbieter zu beachten.
							p
								strong Hinweise zu Rechtsgrundlagen:
								|  Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
								|     Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ferner kann deren Einsatz
								|     ein Bestandteil unserer (vor)vertraglichen Leistungen sein, sofern der Einsatz der Drittanbieter in diesem Rahmen
								|     vereinbart wurde. Ansonsten werden die Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h.
								|     Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang
								|     möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.
							ul.m-elements
								li
									p
										strong Verarbeitete Datenarten:
										|  Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
										|             Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte
										|             Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
										|             IP-Adressen).
								li
									p
										strong Betroffene Personen:
										|  Kommunikationspartner, Nutzer (z.B. Webseitenbesucher, Nutzer von
										|             Onlinediensten).
								li
									p
										strong Rechtsgrundlagen:
										|  Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Vertragserfüllung und
										|             vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
										|             f. DSGVO).
		v-layout
			v-flex(xs12)
				Section#s19(icon="mdi-trash-can" title="Löschung von Daten")
					.text-container
						div 
							p
								| Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung
								| erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B., wenn der Zweck der
								| Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).
							p
								| Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird
								| deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke
								| verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder
								| deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte
								| einer anderen natürlichen oder juristischen Person erforderlich ist.
							p
								| Weitere Hinweise zu der Löschung von personenbezogenen Daten können ferner im Rahmen der einzelnen
								| Datenschutzhinweise dieser Datenschutzerklärung erfolgen.
							ul.m-elements

		v-layout
			v-flex(xs12)
				Section#s20(icon="mdi-update" title="Änderung und Aktualisierung der Datenschutzerklärung")
					.text-container
						div 
							p
								| Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die
								| Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich
								| machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)
								| oder eine sonstige individuelle Benachrichtigung erforderlich wird.
							p
								| Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen
								| angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor
								| Kontaktaufnahme zu prüfen.

		v-layout
			v-flex(xs12)
				Section#s21(icon="gavel" title="Rechte der betroffenen Personen")
					.text-container
						div 
							p
								| Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 18 und 21
								| DSGVO ergeben:
							ul
								li
									strong
										| Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
										| jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs.
										| 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
										| gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu
										| betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden
										| personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit
										| es mit solcher Direktwerbung in Verbindung steht.
								li
									strong Widerrufsrecht bei Einwilligungen:
									|  Sie haben das Recht, erteilte Einwilligungen jederzeit zu
									|         widerrufen.
								li
									strong Auskunftsrecht:
									|  Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende
									|         Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten
									|         entsprechend den gesetzlichen Vorgaben.
								li
									strong Recht auf Berichtigung:
									|  Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die
									|         Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu
									|         verlangen.
								li
									strong Recht auf Löschung und Einschränkung der Verarbeitung:
									|  Sie haben nach Maßgabe der gesetzlichen
									|         Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach
									|         Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
								li
									strong Recht auf Datenübertragbarkeit:
									|  Sie haben das Recht, Sie betreffende Daten, die Sie uns
									|         bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und
									|         maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
								li
									strong Beschwerde bei Aufsichtsbehörde:
									|  Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das
									|         Recht, bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres
									|         Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der
									|         Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.

		v-layout
			v-flex(xs12)
				Section#s22(icon="mdi-book-information-variant" title="Begriffsdefinitionen")
					.text-container
						div 
							p
								| In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten
								| Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
								| gesetzlichen Definitionen sind verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis
								| dienen. Die Begriffe sind alphabetisch sortiert.
							ul.glossary
								li
									strong Besuchsaktionsauswertung:
									|  "Besuchsaktionsauswertung" (englisch "Conversion Tracking")
									|         bezeichnet ein Verfahren, mit dem die Wirksamkeit von Marketingmaßnahmen festgestellt werden kann. Dazu wird im
									|         Regelfall ein Cookie auf den Geräten der Nutzer innerhalb der Webseiten, auf denen die Marketingmaßnahmen
									|         erfolgen, gespeichert und dann erneut auf der Zielwebseite abgerufen. Beispielsweise können wir so
									|         nachvollziehen, ob die von uns auf anderen Webseiten geschalteten Anzeigen erfolgreich waren).
								li
									strong Content Delivery Network (CDN):
									|  Ein "Content Delivery Network" (CDN) ist ein Dienst, mit dessen
									|         Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte mit
									|         Hilfe regional verteilter und über das Internet verbundener Server, schneller und sicherer ausgeliefert werden
									|         können.
								li
									strong IP-Masking:
									|  Als "IP-Masking” wird eine Methode bezeichnet, bei der das letzte Oktett, d.h., die
									|         letzten beiden Zahlen einer IP-Adresse, gelöscht wird, damit die IP-Adresse nicht mehr der eindeutigen
									|         Identifizierung einer Person dienen kann. Daher ist das IP-Masking ein Mittel zur Pseudonymisierung von
									|         Verarbeitungsverfahren, insbesondere im Onlinemarketing
								li
									strong Interessenbasiertes und verhaltensbezogenes Marketing:
									|  Von interessens- und/oder
									|         verhaltensbezogenem Marketing spricht man, wenn potentielle Interessen von Nutzern an Anzeigen und sonstigen
									|         Inhalten möglichst genau vorbestimmt werden. Dies geschieht anhand von Angaben zu deren Vorverhalten (z.B.
									|         Aufsuchen von bestimmten Webseiten und Verweilen auf diesen, Kaufverhaltens oder Interaktion mit anderen
									|         Nutzern), die in einem sogenannten Profil gespeichert werden. Zu diesen Zwecken werden im Regelfall Cookies
									|         eingesetzt.
								li
									strong Konversionsmessung:
									|  Die Konversionsmessung ist ein Verfahren, mit dem die Wirksamkeit von
									|         Marketingmaßnahmen festgestellt werden kann. Dazu wird im Regelfall ein Cookie auf den Geräten der Nutzer
									|         innerhalb der Webseiten, auf denen die Marketingmaßnahmen erfolgen, gespeichert und dann erneut auf der
									|         Zielwebseite abgerufen. Beispielsweise können wir so nachvollziehen, ob die von uns auf anderen Webseiten
									|         geschalteten Anzeigen erfolgreich waren.
								li
									strong Personenbezogene Daten:
									|  "Personenbezogene Daten“ sind alle Informationen, die sich auf eine
									|         identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person“) beziehen; als
									|         identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung
									|         zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie)
									|         oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen,
									|         physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
									|         natürlichen Person sind.
								li
									strong Profiling:
									|  Als "Profiling“ wird jede Art der automatisierten Verarbeitung personenbezogener
									|         Daten bezeichnet, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte
									|         persönliche Aspekte, die sich auf eine natürliche Person beziehen (je nach Art des Profilings gehören dazu
									|         Informationen betreffend das Alter, das Geschlecht, Standortdaten und Bewegungsdaten, Interaktion mit Webseiten
									|         und deren Inhalten, Einkaufsverhalten, soziale Interaktionen mit anderen Menschen) zu analysieren, zu bewerten
									|         oder, um sie vorherzusagen (z.B. die Interessen an bestimmten Inhalten oder Produkten, das Klickverhalten auf
									|         einer Webseite oder den Aufenthaltsort). Zu Zwecken des Profilings werden häufig Cookies und Web-Beacons
									|         eingesetzt.
								li
									strong Reichweitenmessung:
									|  Die Reichweitenmessung (auch als Web Analytics bezeichnet) dient der
									|         Auswertung der Besucherströme eines Onlineangebotes und kann das Verhalten oder Interessen der Besucher an
									|         bestimmten Informationen, wie z.B. Inhalten von Webseiten, umfassen. Mit Hilfe der Reichweitenanalyse können
									|         Webseiteninhaber z.B. erkennen, zu welcher Zeit Besucher ihre Webseite besuchen und für welche Inhalte sie sich
									|         interessieren. Dadurch können sie z.B. die Inhalte der Webseite besser an die Bedürfnisse ihrer Besucher
									|         anpassen. Zu Zwecken der Reichweitenanalyse werden häufig pseudonyme Cookies und Web-Beacons eingesetzt, um
									|         wiederkehrende Besucher zu erkennen und so genauere Analysen zur Nutzung eines Onlineangebotes zu erhalten.
								li
									strong Remarketing:
									|  Vom "Remarketing“ bzw. "Retargeting“ spricht man, wenn z.B. zu Werbezwecken
									|         vermerkt wird, für welche Produkte sich ein Nutzer auf einer Webseite interessiert hat, um den Nutzer auf
									|         anderen Webseiten an diese Produkte, z.B. in Werbeanzeigen, zu erinnern.
								li
									strong Tracking:
									|  Vom "Tracking“ spricht man, wenn das Verhalten von Nutzern über mehrere
									|         Onlineangebote hinweg nachvollzogen werden kann. Im Regelfall werden im Hinblick auf die genutzten
									|         Onlineangebote Verhaltens- und Interessensinformationen in Cookies oder auf Servern der Anbieter der
									|         Trackingtechnologien gespeichert (sogenanntes Profiling). Diese Informationen können anschließend z.B.
									|         eingesetzt werden, um den Nutzern Werbeanzeigen anzuzeigen, die voraussichtlich deren Interessen entsprechen.
								li
									strong Verantwortlicher:
									|  Als "Verantwortlicher“ wird die natürliche oder juristische Person, Behörde,
									|         Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
									|         Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
								li
									strong Verarbeitung:
									|  "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren
									|         ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff
									|         reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das
									|         Übermitteln oder das Löschen.

		v-layout
			v-flex(xs12)
				Section#s23(icon="search" title="Quellen")
					.text-container
						div
							p
								| Die Datenschutzerklärung wurde 
								a(href="https://datenschutz-generator.de/?l=de" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank")
									| erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
</template>

<script>
import Section from "@/components/Section";
import KontaktDaten from "@/components/KontaktDaten";
// @ is an alias to /src
export default {
    name: "Datenschutzerklaerung",
    components: { Section, KontaktDaten }
};
</script>

<style lang="sass" scoped>
a
	color: #319ae3

.text-container
	padding-left: 20px
	padding-top: 5px

.logo
	display: flex

ul ul li
	padding-bottom: 5px

#text-cards-container
	padding-top: 3px
	padding-left: 10px
	padding-right: 10px
	padding-bottom: 10px

#text-card
	padding-left: 1%
	padding-right: 1%

.image-container
	display: flex

.image
	margin: 20px

::v-deep
	.theme--dark.v-list
		background-color: transparent

	.v-list
		padding: 0

		&__tile
			height: 35px !important
			padding-left: 5px !important
			//border-bottom: 2px solid #c8c8c8
			background-color: #363636
			box-shadow: 0 2px 2px -1px black
			padding-top: 0

			#v-list-tile-avatar
				min-width: 45px

			.text-container
				color: #c8c8c8

			&__title
				color: #ffffff

	.v-btn
		text-transform: none

	.container
		padding: 0

	#img-isis-tub
		border-bottom: 2px solid white

	#icons
		height: 17px
		display: inline-flex
		align-items: center
		justify-content: center
		vertical-align: middle
		padding-right: 5px

	.dataTable td
		padding-left: 20px
</style>
