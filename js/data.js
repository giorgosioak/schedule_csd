const csd_version = '28/9/2022'
var programma = [
  {
    class: 'ΗΥ-100',
    name: 'Εισαγωγή στην Επιστήμη Υπολογιστών',
    teacher: 'ΠΡΑΤΙΚΑΚΗΣ',
    monday: '',
    tuesday: '4-6 ΑΜΦ ΣΟ',
    wednesday: '',
    thursday: '4-6 ΑΜΦ ΣΟ',
    friday: '2-4 ΑΜΦ ΣΟ (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-108',
    name: 'Αγγλικά Ι',
    teacher: 'ΡΙΖΟΠΟΥΛΟΥ',
    monday: '',
    tuesday: '2-4 Η.204',
    wednesday: '',
    thursday: '12-2 Η.204',
    friday: ''
  },
  {
    class: 'ΗΥ-110',
    name: 'Απειροστικός Λογισμός Ι',
    teacher: 'ΤΣΑΚΑΛΙΔΗΣ / ΤΣΑΓΚΑΤΑΚΗΣ/ΠΙΤΙΚΑΚΗΣ',
    monday: '',
    tuesday: '10-12 ΑΜΦ ΣΟ',
    wednesday: '',
    thursday: '10-12 ΑΜΦ ΣΟ',
    friday: '4-6 ΑΜΦ ΣΟ (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-112',
    name: 'Φυσική Ι',
    teacher: 'ΚΑΦΕΝΤΖΗΣ',
    monday: '10-12 ΑΜΦ ΣΟ',
    tuesday: '',
    wednesday: '10-12 ΑΜΦ ΣΟ',
    thursday: '',
    friday: '10-12 ΑΜΦ ΣΟ (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-118',
    name: 'Διακριτά Μαθηματικά',
    teacher: 'ΓΕΩΡΓΑΚΟΠΟΥΛΟΣ',
    monday: '2-4 ΑΜΦ Α (ΦΡΟΝΤ)',
    tuesday: '2-4 ΑΜΦ Α',
    wednesday: '',
    thursday: '2-4 ΑΜΦ Α',
    friday: ''
  },
  {
    class: 'ΗΥ-119',
    name: 'Γραμμική Άλγεβρα',
    teacher: 'ΚΟΜΟΝΤΑΚΗΣ',
    monday: '6-8 ΑΜΦ ΣΟ',
    tuesday: '',
    wednesday: '',
    thursday: '6-8 ΑΜΦ ΣΟ',
    friday: '6-8 ΑΜΦ ΣΟ (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-120',
    name: 'Ψηφιακή Σχεδίαση',
    teacher: 'ΚΑΤΕΒΑΙΝΗΣ',
    monday: '12-2 ΑΜΦ ΣΟ',
    tuesday: '',
    wednesday: '12-2 ΑΜΦ ΣΟ',
    thursday: '',
    friday: '12-2 ΑΜΦ ΣΟ'
  },
  {
    class: 'ΗΥ-208',
    name: 'Αγγλικά ΙΙΙ',
    teacher: 'ΡΙΖΟΠΟΥΛΟΥ',
    monday: '',
    tuesday: '12-2 Η.204',
    wednesday: '',
    thursday: '2-4 Η.204',
    friday: ''
  },
  {
    class: 'ΗΥ-217',
    name: 'Πιθανότητες',
    teacher: 'ΤΣΑΚΑΛΙΔΗΣ',
    monday: '10-12 ΑΜΦ Α',
    tuesday: '',
    wednesday: '10-12 ΑΜΦ Α',
    thursday: '',
    friday: '10-12 ΑΜΦ Α (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-240',
    name: 'Δομές Δεδομένων',
    teacher: 'ΦΑΤΟΥΡΟΥ',
    monday: '',
    tuesday: '2-4 ΑΜΦ ΣΟ',
    wednesday: '',
    thursday: '12-2 ΑΜΦ ΣΟ',
    friday: '12-2 ΑΜΦ Α (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-252',
    name: 'Αντικειμενοστρεφής Προγραμματισμός',
    teacher: 'ΤΖΙΤΖΙΚΑΣ',
    monday: '',
    tuesday: '10-12 ΑΜΦ Α',
    wednesday: '',
    thursday: '10-12 ΑΜΦ Α',
    friday: '4-6 ΑΜΦ Α (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-280',
    name: 'Θεωρία Υπολογισμού',
    teacher: 'ΓΕΩΡΓΑΚΟΠΟΥΛΟΣ',
    monday: '2-4 ΑΜΦ ΣΟ',
    tuesday: '',
    wednesday: '2-4 ΑΜΦ ΣΟ',
    thursday: '',
    friday: '2-4 Α.113 (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-330',
    name: 'Εισαγωγή στη Θεωρία των Τηλεπικοινωνιακών Συστημάτων',
    teacher: 'ΤΡΑΓΑΝΙΤΗΣ /ΠΑΠΑΔΑΚΗΣ ΣΤ.',
    monday: '10-12 Α.125',
    tuesday: '',
    wednesday: '',
    thursday: '10-12 Α.125',
    friday: ''
  },
  {
    class: 'ΗΥ-335',
    name: 'Δίκτυα Υπολογιστών',
    teacher: 'ΔΗΜΗΤΡΟΠΟΥΛΟΣ',
    monday: '12-2 ΑΜΦ Α',
    tuesday: '',
    wednesday: '12-2 ΑΜΦ Α',
    thursday: '',
    friday: '12-2 Η.204 (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-345',
    name: 'Λειτουργικά Συστήματα',
    teacher: 'ΜΑΡΚΑΤΟΣ',
    monday: '',
    tuesday: '4-6 ΑΜΦ Α',
    wednesday: '',
    thursday: '4-6 ΑΜΦ Α',
    friday: '2-4 ΑΜΦ Α (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-352',
    name: 'Τεχνολογία Λογισμικού',
    teacher: 'ΣΑΒΒΙΔΗΣ',
    monday: '',
    tuesday: '10-12 Α.125 (ΦΡΟΝΤ)',
    wednesday: '10-12 Α.125',
    thursday: '',
    friday: '10-12 Α.125'
  },
  {
    class: 'ΗΥ-358',
    name: 'Γραφική',
    teacher: 'ΘΕΣΗ ΔΙΔΑΚΤΙΚΗΣ ΕΜΠΕΙΡΙΑΣ',
    monday: '',
    tuesday: '6-8 ΑΜΦ Α',
    wednesday: '6-8 ΑΜΦ Α (ΦΡΟΝΤ)',
    thursday: '6-8 ΑΜΦ Α',
    friday: ''
  },
  {
    class: 'ΗΥ-359',
    name: 'Διαδικτυοκεντρικός Προγραμματισμός',
    teacher: 'ΘΕΣΗ ΔΙΔΑΚΤΙΚΗΣ ΕΜΠΕΙΡΙΑΣ',
    monday: '2-4 Α.113',
    tuesday: '',
    wednesday: '2-4 Α.113 (ΦΡΟΝΤ)',
    thursday: '2-4 Α.113',
    friday: ''
  },
  {
    class: 'ΗΥ-360',
    name: 'Αρχεία και Βάσεις Δεδομένων',
    teacher: 'ΠΛΕΞΟΥΣΑΚΗΣ',
    monday: '4-6 ΑΜΦ Α',
    tuesday: '',
    wednesday: '4-6 ΑΜΦ Α',
    thursday: '',
    friday: '4-6 Α.113 (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-370',
    name: 'Ψηφιακή Επεξεργασία Σημάτων',
    teacher: 'ΣΤΥΛΙΑΝΟΥ',
    monday: '10-12 Η.204 (ΕΡΓ/ΡΙΟ)',
    tuesday: '10-12 Α.113',
    wednesday: '',
    thursday: '10-12 Α.113',
    friday: ''
  },
  {
    class: 'ΗΥ-371',
    name: 'Ψηφιακή Επεξεργασία Εικόνων',
    teacher: 'ΚΟΜΟΝΤΑΚΗΣ',
    monday: '',
    tuesday: '6-8 Α.125 ',
    wednesday: '6-8 Α.125 ',
    thursday: '',
    friday: '6-8 Α.125 (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-425',
    name: 'Αρχιτεκτονική Υπολογιστικών Συστημάτων',
    teacher: 'ΠΑΠΑΕΥΣΤΑΘΙΟΥ',
    monday: '2-4 Η.206',
    tuesday: '',
    wednesday: '2-4 Η.206',
    thursday: '',
    friday: '2-4 Η.206'
  },
  {
    class: 'ΗΥ-436',
    name: 'Δίκτυα Καθοριζόμενα από Λογισμικό',
    teacher: 'ΔΗΜΗΤΡΟΠΟΥΛΟΣ',
    monday: '',
    tuesday: '2-4 Α.121 ',
    wednesday: '',
    thursday: '2-4 Α.121 ',
    friday: '10-12 Α.121 (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-452',
    name: 'Εισαγωγή στην Επιστήμη και την Τεχνολογία των Υπηρεσιών',
    teacher: 'ΜΑΓΚΟΥΤΗΣ/ΠΛΕΞΟΥΣΑΚΗΣ/ΠΙΤΙΚΑΚΗΣ/ΜΠΙΤΣΑΚΗ',
    monday: '10-12 Α.113',
    tuesday: '',
    wednesday: '10-12 Α.113',
    thursday: '',
    friday: '6-8 Α.113 (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-454',
    name: 'Τεχνολογία Ανάπτυξης Έξυπνων Διεπαφών και Παιχνιδιών',
    teacher: 'ΣΑΒΒΙΔΗΣ',
    monday: '12-2 Η.204',
    tuesday: '12-2 Α.121 (ΦΡΟΝΤ)',
    wednesday: '',
    thursday: '10-12 Α.121',
    friday: ''
  },
  {
    class: 'ΗΥ-458',
    name: 'Εισαγωγή στην Κρυπτογραφία',
    teacher: 'ΜΑΡΚΑΤΟΣ/ΜΑΝΙΦΑΒΑΣ',
    monday: '12-2 Α.125',
    tuesday: '',
    wednesday: '',
    thursday: '12-2 Α.125 (ΦΡΟΝΤ)',
    friday: '12-2 Α.125'
  },
  {
    class: 'ΗΥ-460',
    name: 'Συστήματα Διαχείρισης Βάσεων Δεδομένων',
    teacher: 'ΠΙΤΙΚΑΚΗΣ/ΚΟΝΔΥΛΑΚΗΣ',
    monday: '4-6 Η.204 (ΦΡΟΝΤ)',
    tuesday: '',
    wednesday: '4-6 Η.204 ',
    thursday: '',
    friday: '4-6 Η.204 '
  },
  {
    class: 'ΗΥ-469',
    name: 'Σύγχρονα Θέματα Αλληλεπίδρασης Ανθρώπου-Υπολογιστή',
    teacher: 'ΣΤΕΦΑΝΙΔΗΣ',
    monday: '6-8 Η.204 (ΦΡΟΝΤ)',
    tuesday: '6-8 Η.204',
    wednesday: '',
    thursday: '6-8 Η.204',
    friday: ''
  },
  {
    class: 'ΗΥ-486',
    name: 'Αρχές Κατανεμημένου Υπολογισμού',
    teacher: 'ΦΑΤΟΥΡΟΥ',
    monday: '',
    tuesday: '10-12 Η.204',
    wednesday: '',
    thursday: '4-6 Η.204 ',
    friday: '4-6 Α.121 (ΦΡΟΝΤ)'
  },
  {
    class: 'ΗΥ-487',
    name: 'Εισαγωγή στην Τεχνητή Νοημοσύνη',
    teacher: 'ΤΣΑΜΑΡΔΙΝΟΣ',
    monday: '4-6 Α.121',
    tuesday: '4-6 Α.121 (ΦΡΟΝΤ)',
    wednesday: '',
    thursday: '4-6 Α.121',
    friday: ''
  },
  {
    class: 'ΗΥ-500',
    name: 'Εισαγωγή στην Ερευνα',
    teacher: 'ΜΕΛΗ ΔΕΠ ΤΟΥ ΤΜΗΜΑΤΟΣ',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '12-2 Α.113',
    friday: ''
  },
  {
    class: 'ΗΥ-508',
    name: 'Τεχνική Συγγραφή στα Αγγλικά',
    teacher: 'ΡΙΖΟΠΟΥΛΟΥ',
    monday: '',
    tuesday: '10-12 Η.206',
    wednesday: '',
    thursday: '10-12 Η.206',
    friday: ''
  },
  {
    class: 'ΗΥ-527',
    name: 'Αρχιτεκτονική Παράλληλων Υπολογιστών',
    teacher: 'ΜΠΙΛΑΣ',
    monday: '10-12 Η.206',
    tuesday: '',
    wednesday: '10-12 Η.206',
    thursday: '',
    friday: '12-2 Η.206'
  },
  {
    class: 'ΗΥ-531',
    name: 'Θέματα Θεωρίας Πληροφοριών',
    teacher: 'ΤΡΑΓΑΝΙΤΗΣ',
    monday: '12-2 Η.208',
    tuesday: '',
    wednesday: '12-2 Η.208',
    thursday: '',
    friday: ''
  },
  {
    class: 'ΗΥ-542',
    name: 'Τεχνολογίες Νέφους, Ακμών Δικτύου και Ομίχλης',
    teacher: 'ΚΡΗΤΙΚΟΣ',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '2-4 Η.208',
    friday: '2-4 Η.208'
  },
  {
    class: 'ΗΥ-546',
    name: 'Τύποι και Γλώσσες Προγραμματισμού',
    teacher: 'ΠΡΑΤΙΚΑΚΗΣ',
    monday: '4-6 Η.206',
    tuesday: '',
    wednesday: '4-6 Η.206',
    thursday: '',
    friday: ''
  },
  {
    class: 'ΗΥ-559',
    name: 'Τεχνολογίες Υποδομών για Υπηρεσίες Μεγάλης Κλίμακας',
    teacher: 'ΜΑΓΚΟΥΤΗΣ',
    monday: '6-8 Α.121',
    tuesday: '',
    wednesday: '6-8 Α.121',
    thursday: '',
    friday: ''
  },
  {
    class: 'ΗΥ-567',
    name: 'Αναπαράσταση Γνώσης και Συλλογιστική',
    teacher: 'ΘΕΣΗ ΔΙΔΑΚΤΙΚΗΣ ΕΜΠΕΙΡΙΑΣ',
    monday: '',
    tuesday: '4-6 Η.208',
    wednesday: '',
    thursday: '4-6 Η.208',
    friday: ''
  },
  {
    class: 'ΗΥ-575',
    name: 'Εργαστήριο Ρομποτικής Πλοήγησης',
    teacher: 'ΤΡΑΧΑΝΙΑΣ',
    monday: '',
    tuesday: '4-6 Η.206',
    wednesday: '',
    thursday: '4-6 Η.206',
    friday: ''
  },
  {
    class: 'ΗΥ-577',
    name: 'Μηχανική Μάθηση',
    teacher: 'ΤΣΑΜΑΡΔΙΝΟΣ',
    monday: '12-2 Α.121',
    tuesday: '',
    wednesday: '12-2 Α.121',
    thursday: '',
    friday: '12-2 Α.121'
  },
  {
    class: 'ΗΥ-578',
    name: 'Επεξεργασία Φωνής',
    teacher: 'ΣΤΥΛΙΑΝΟΥ',
    monday: '2-4 Η.208 (ΦΡΟΝΤ)',
    tuesday: '',
    wednesday: '10-12 Η.208',
    thursday: '',
    friday: '10-12 Η.208'
  },
  {
    class: 'ΗΥ-647',
    name: 'Σύγχρονα Συστήματα Αποθήκευσης Δεδομένων',
    teacher: 'ΜΠΙΛΑΣ/ΣΑΛΟΥΣΤΡΟΣ',
    monday: '',
    tuesday: '10-12 Ε.313',
    wednesday: '',
    thursday: '10-12 Ε.313',
    friday: '10-12 Ε.313'
  },
  {
    class: 'ΗΥ-672',
    name: 'Προχωρημένα Θέματα Υπολογιστικής Όρασης',
    teacher: 'ΑΡΓΥΡΟΣ',
    monday: '',
    tuesday: '2-4 Ε.311',
    wednesday: '',
    thursday: '2-4 Ε.311',
    friday: ''
  }
]
